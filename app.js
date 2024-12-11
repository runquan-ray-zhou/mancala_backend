const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// health check route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Mancala App Backend");
});

// error route
app.get("*", (req, res) => {
  res.status(404).send("You found the error page.");
});
// export server app
module.exports = app;
