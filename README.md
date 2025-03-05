# Online Judge Platform
## screenshots
![image](https://github.com/user-attachments/assets/55840459-32ea-4845-af42-867978896c9f)
![image](https://github.com/user-attachments/assets/76431e10-01cb-402d-91b1-05c18f5f00a5)
![image](https://github.com/user-attachments/assets/bf329d28-1e81-4373-a674-6eec3558a3ea)
![image](https://github.com/user-attachments/assets/b051b79f-a198-47c6-874c-9a1a4a4d0390)
## scaling replicas of the compiler based on the number of requests
![image](https://github.com/user-attachments/assets/dcbcbe05-54e5-4cd2-aaa0-85cfbf0277b8)
![image](https://github.com/user-attachments/assets/67d6c59d-add1-4acb-adb6-9b617d334cf8)

## Overview
The Online Judge Platform is a robust and scalable system designed for solving Data Structures and Algorithms (DSA) problems with an integrated code editor. Users can write, execute, and test their solutions in **C++** and **Python** within a seamless environment. The platform is built with a **three-tier architecture**, ensuring efficiency, scalability, and fault tolerance.

## Features
- 🏗 **Three-Tier Architecture**:  
  - **Frontend**: User interface for problem-solving and code execution.  
  - **Backend Server**: Manages user requests, problem sets, and results.  
  - **Compiler Service**: no third party api for compiler , using compilers installed in a docker container.

- 🚀 **Technology Stack**:  
  - **Frontend**: React.js + vite for an interactive UI.  
  - **Backend**: Node.js with Express.js for API handling.  
  - **Database**: MongoDB for storing problems, submissions, and user data.  
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
