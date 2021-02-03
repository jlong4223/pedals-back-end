// requiring the modules
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// running express
const app = express();

// requires .env file and require DB module
require("dotenv").config();
require("./config/database");

// TODO require routes
const bikesRouter = require("./routes/bikes");
const usersRouter = require("./routes/users");
const welcomeRouter = require("./routes/welcome");

// middleware being used
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// TODO use routes here
app.use("/bikes", bikesRouter);
app.use("/users", usersRouter);
app.use("/", welcomeRouter);

// defining and running the app
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express is running on port: ${port}`);
});
