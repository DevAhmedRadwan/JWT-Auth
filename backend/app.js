const mongoose = require("mongoose");
const express = require("express");
/*************************** Required middleware ******************************/
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
/******************************* initializing *********************************/
const app = express();
/****************************** Required routes  ******************************/
const routes = require("./routes/routes");
/********************************* Database ***********************************/
const DbURL = "mongodb://localhost/auth";
mongoose.connect(DbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => {
  console.log("DataBase Connection Succeeded!");
})
.catch(() => {
  console.log("Connection Failed!");
});
/********************************* middleware **********************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With");
  res.setHeader("Access-Control-Allow-Headers","Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
  next();
});
/************************************ Routes **********************************/
app.use("/",routes);
/********************* Error handling middleware function *********************/
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
/************************************ Exports **********************************/
module.exports = app;
