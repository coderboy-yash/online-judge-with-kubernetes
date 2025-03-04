import { executeCpp } from "../executeCpp.js";
import { executePython } from "../executePython.js";
import { generateFile } from "../generateFile.js";
import { generateInputFile } from "../generateInputFile.js";
import Problem from "../models/Problem.js";

import fs from 'fs';
import path from 'path';

export const runCode = async (req, res) => {
  const { language = "cpp", code, input } = req.body;
  
  console.log(input);
  if (code === undefined) {
    return res.status(400).json({ success: false, error: "bad request, code not found" });
  }
  
  let filePath, inputFilePath;
  
  try {
    filePath = await generateFile(language, code);
    // console.log(3);
    
    inputFilePath = await generateInputFile("txt", input);
    // console.log(2);
    
    let output;
    
    if (language === "py") {
      console.log(1);
      output = await executePython(filePath, inputFilePath);
      res.status(200).send({ output });
    } else if (language === "cpp") {
      output = await executeCpp(filePath, inputFilePath);
      console.log("output", output);
      res.status(200).send({ output });
    }

  } catch (err) {
    console.error("Execution error", err);
    res.status(500).send({ error: err });
  } finally {
    // Delete the generated files after response
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);  // Delete the code file
    }
    
    if (inputFilePath && fs.existsSync(inputFilePath)) {
      fs.unlinkSync(inputFilePath);  // Delete the input file
    }
    console.log("Temporary files deleted");
  }
};

 export const submitCode = async (req, res) => {
  const { language = "cpp", code, problemId } = req.body;
  let input, sampleOutput;
  let filePath, inputFilePath;
  try {
    const problem = await Problem.findOne({ id: problemId });
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    input = problem.allTestCases;
    console.log(input)
    sampleOutput = problem.allTestOutput.trim().split(/\r?\n/).map(line => line.trim());
    
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
  
  if (code == undefined) {
    return res.status(400).json({ success: false, error: "bad request, code not found" });
  }
  try {
     filePath = await generateFile(language, code);
     inputFilePath = await generateInputFile("txt", input);
    
    let output;
    if (language == "py") {
      output = await executePython(filePath, inputFilePath);
    } else if (language == "cpp") {
      output = await executeCpp(filePath, inputFilePath);
    }
    
    output = output.trim().split(/\r?\n/).map(line => line.trim());
    
    let results = [];
    let allPass = true;
    let failedTestcase=""
    
    for (let i = 0; i < sampleOutput.length; i++) {
      if (output[i] === sampleOutput[i]) {
        results.push({ testCase: i + 1, result: 'pass' });
      } else {
        failedTestcase=i+1;
        results.push({ testCase: i + 1, result: 'fail', expected: sampleOutput[i], actual: output[i] });
        allPass = false;
        break;
      }
    }
    
    console.log("Generated output:", output);
    console.log("Expected output:", sampleOutput);
    console.log("Detailed results:", results);

    res.status(200).send({ allPass: allPass,failedTestcase:failedTestcase,results:results });
  } catch (err) {
    console.error("Execution error", err);
    res.status(200).send({ error:err });
  }
  finally {
    // Delete the generated files after response
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);  // Delete the code file
    }
    
    if (inputFilePath && fs.existsSync(inputFilePath)) {
      fs.unlinkSync(inputFilePath);  // Delete the input file
    }
    console.log("Temporary files deleted");
  }
}

