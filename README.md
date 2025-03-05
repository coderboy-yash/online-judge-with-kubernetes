﻿# Online Judge Platform

## Overview
The Online Judge Platform is a robust and scalable system designed for solving Data Structures and Algorithms (DSA) problems with an integrated code editor. Users can write, execute, and test their solutions in **C++** and **Python** within a seamless environment. The platform is built with a **three-tier architecture**, ensuring efficiency, scalability, and fault tolerance.

## Features
- 🏗 **Three-Tier Architecture**:  
  - **Frontend**: User interface for problem-solving and code execution.  
  - **Backend Server**: Manages user requests, problem sets, and results.  
  - **Compiler Service**: Isolated execution environment for running code securely.  

- 🚀 **Technology Stack**:  
  - **Frontend**: React.js (or preferred framework) for an interactive UI.  
  - **Backend**: Node.js with Express.js for API handling.  
  - **Database**: MongoDB/PostgreSQL for storing problems, submissions, and user data.  
  - **Compiler Service**: Secure execution using Dockerized environments.  

- 🏗 **Containerization & Orchestration**:  
  - **Docker Containers** for isolated and secure code execution.  
  - **Docker Compose** for service management and dependency control.  
  - **Load Balancing** for handling multiple requests efficiently.  
  - **Kubernetes HPA (Horizontal Pod Autoscaler)** for automatic scaling based on demand.  

- 🔥 **Additional Features**:  
  - **Real-time Execution Logs** for user feedback.  
  - **Multiple Language Support** (C++ & Python).  
  - **Secure Execution Environment** using containerized compilers.  
  - **Scalability with Kubernetes** ensuring high availability.  

## Installation & Setup

### Prerequisites
- Docker & Docker Compose  
- Kubernetes & kubectl  
- Node.js & npm  
- MongoDB/PostgreSQL  

### Steps to Run Locally
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/online-judge.git
   cd online-judge
   ```
2. Start backend services using Docker Compose:  
   ```bash
   docker-compose up --build
   ```
3. Deploy on Kubernetes:  
   ```bash
   kubectl apply -f k8s/
   ```
4. Start frontend:  
   ```bash
   cd frontend
   npm install
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`

## Scaling & Deployment
- The platform supports **Horizontal Scaling** with Kubernetes HPA.  
- Load balancing is managed via **Kubernetes Services**.  
- Containers are optimized with **resource limits and monitoring tools**.  

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.  

## License
This project is licensed under the MIT License.  

---

### 🚀 Happy Coding!
# online-judge-with-kubernetes
