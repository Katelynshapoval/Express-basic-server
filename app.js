// bring in express
const express = require("express");

// create the express app
const app = express();

// middleware for "/users" route
app.use("/users", (req, res, next) => {
  res.send("<h1>Users!</h1>"); // show "Users!" when visiting /users
});

// middleware for "/" route (home page)
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>"); // show homepage
});

// start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
