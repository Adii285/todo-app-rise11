# To-Do web application with authentication
A simple todo web application created using MERN stack using JWT authentication. Has features like register, login, add task, delete task, etc. Responsive website.

# Assignment
Task: Creating an to-do web app with authentication.

Instructions:
1. Create a web app with ReactJS and NodeJS.
2. Web apps should contain login/signup features implemented with a database in NodeJS.
3. It should contain a simple to-do list with CREATE, DELETE and UPDATE features in react and data should also be saved in the database.
4. Only logged in users should be able to create a to-do list . 
5. Page design should be clean and responsive.
   
# Installation
Run the following command to clone the repository
```
git clone https://github.com/Adii285/todo-app-rise11.git
```
Go to ```frontend``` and ```backend``` directory to install packages
```
cd frontend
npm install
```
```
cd backend
npm install
```
# Configuration
Create a project in MongoDB and get the URI of the database.

Create ```.env``` file inside ```backend``` directory and copy the following code

```
MONGO_URI=Your mongodb URI
GMAIL_USERNAME=your gmail id
GMAIL_PASSWORD=your gmail id's password
PORT=8000
JWT_SECRET=any random secret key (eg- secretkey123)
```
# Run the App
Go to ```backend``` and ```frontend``` directory and start the server and frontend app using these commands respectively:
```
cd backend
nodemon server
```
```
cd frontend
npm start
```

# Testing
After the backend server and frontend app is running, go to ```http://localhost:3000``` (it will open automatically, if it doesn't then open manually)
The web page should look like this:

Register as a new user and enter your details and then return back to the login page and login to your new creater account.
The page should look like this:

Test the application by adding new tasks, deleting tasks and marking the tasks as completed using the checkbox.

All the details are stored in the database we created so the details will stay even after logging out and logging in again.
