Help Center API
Project Overview
This is a RESTful API built using Node.js and Express.js that allows users to manage Help Center cards, which represent different sections such as "Branches," "Manage Your Account," and "Manage Billing."

Features
Create a Card: Add a new Help Center card with a title and description.
Retrieve All Cards: Get a list of all Help Center cards.
Retrieve a Card by Title: Fetch the details of a specific card by its title.
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (Atlas or local instance)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/Pnkj12joshi/HelpCenter.git
cd HelpCenter
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:

Create a .env file in the root directory with the following content:

plaintext
Copy code
PORT=9001
MONGODB_URI=<your_mongodb_connection_string>
Replace <your_mongodb_connection_string> with your MongoDB URI.

Running the Server
Start the server with:

bash
Copy code
npm start
The server will run on http://localhost:9001.

API Endpoints
GET /pin: Check if the server is running.
POST /cards: Create a new card (requires title and description).
GET /cards: Retrieve all cards.
GET /cards/:title: Retrieve a specific card by its title.
Frontend Setup
A React frontend is included to interact with the API:

Navigate to the Frontend Directory:

bash
Copy code
cd frontend
Install Frontend Dependencies:

bash
Copy code
npm install
Run the React App:

bash
Copy code
npm start
The frontend will be available at http://localhost:3000.

Error Handling
The API handles errors such as:

Duplicate card titles during creation.
Retrieving non-existent cards.
Server errors with appropriate HTTP status codes.

Technologies Used
Backend: Node.js, Express.js, MongoDB, Mongoose
Frontend: React, Axios
Tools: Postman, Git, GitHub


Answers of the React Questions 
Answer1: Use the Context API for global state shared across many components.
Answer2:  When handling state in a complicated component, the useState hook makes sense because it makes managing dynamic data simple, efficiently re-renders the component when the state changes, and keeps state local to the component, which makes the code more modular and easier to maintain.
