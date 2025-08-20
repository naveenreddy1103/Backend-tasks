# Backend Tasks

This is a Node.js backend project using **Express, MongoDB, and Mongoose**.  
It is used to submit user form data and get all users from the database.  
The project is already deployed on **Render**.

---

## Requirements

- Node.js  
- MongoDB (Cloud Atlas or Local using MongoDB Compass)  
- Dependencies:
  - express  
  - mongoose  
  - cors  
  - dotenv  
  - nodemon  

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/naveenreddy1103/Backend-tasks.git
   cd Backend-tasks
2. Install dependencies:
   npm install

3. Create a .env file in the project root and add:
   MONGO_URI=your_mongo_connection_string
PORT=3000
4. Running the Server:- npm start


# API Endpoints
1. Get All Users :get  http://127.0.0.1:2000/user
 Description: Returns a list of all users stored in the database.

2. Get All Users:- post http://127.0.0.1:2000/userform
   Description: Submits new user data to the database.


Deployment

The project is live on Render:
👉 https://backend-tasks-efn5.onrender.com/
   

Note:- To use a local database, install MongoDB Compass.


















