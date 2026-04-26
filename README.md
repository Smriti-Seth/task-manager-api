#  Task Manager REST API

A scalable RESTful Task Management System built using Node.js, Express, and PostgreSQL with JWT authentication and role-based access control.

##  Features

*  User Authentication (Register/Login using JWT)
*  Role-based access (User/Admin)
*  Create, Read, Delete Tasks
*  Protected Routes using Middleware
*  PostgreSQL Database Integration

---

##  Tech Stack

* Backend: Node.js, Express.js
* Database: PostgreSQL
* Authentication: JWT
* Security: bcrypt

---


##  Setup Instructions

### 1. Clone the repository

git clone https://github.com/Smriti-Seth/task-manager-api.git
cd task-manager-api

### 2. Install dependencies

npm install

### 3. Configure environment variables

Create a `.env` file:

PORT=3000
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=taskdb
JWT_SECRET=secretkey

### 4. Start server

node app.js


