// requiring mongoose to connect to MongoDB
const mongoose = require("mongoose");

// connecting to mongoDB using mongoose
// create database_uri
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//Shortcut variable for mongoose connection
const db = mongoose.connection;

// Making sure to listen for the connection
db.once("connected", () => {
  console.log(`Connected to MongoDB on ${db.host}: ${db.port}`);
});
