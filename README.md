# To-Do-List

A simple web-based to-do list application built with Node.js. This project demonstrates how to create a dynamic web application using a backend server, a database, and a templating engine to manage tasks.

## Features
- Add Tasks: Easily add new tasks to your to-do list.
- View All Tasks: Display all current tasks on a single page.
- Delete Tasks: Remove completed tasks from the list.
- Persistent Storage: Tasks are stored in a MongoDB database, ensuring they are saved even after the server is restarted.

## Prerequisites
Before you begin, make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2. Install Dependencies
```
npm install
```

3. Set Up MongoDB

## Usage
1. Configure Database Connection
```
// Replace this with your own MongoDB Atlas connection string
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });
```
2. Run the Server
```
node index.js
```
3. Access the Application
Open your web browser and navigate to http://localhost:3000 to view and use the to-do list.

## Technologies Used
- Node.js: The server-side JavaScript runtime environment.
- Express.js: A web framework for Node.js used to handle routing and server logic.
- EJS: An Embedded JavaScript templating engine used to generate the HTML for the user interface.
- MongoDB: A NoSQL document database used for persistent storage of tasks.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- body-parser: Middleware to handle parsing of request bodies.