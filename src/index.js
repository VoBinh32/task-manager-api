const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

//Middlware function
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Sie is currently down. Check back soon");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Without middleware: new request -> run route handler
// With middleware: new request -> do something -> run route handler

app.listen(port, () => {
  console.log("Server is up on " + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };

// myFunction();

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const task = await Task.findById("5fd5f34a77a0089c1cbae542");
//   await task.populate("owner").execPopulate();
//   console.log(task.owner);

//   const user = await User.findById("5fd5f2466086f390484e4870");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
