const express = require("express");
const app = express();
const mongoose = require("../blog/models/connect");
const page = require("../blog/routes/pages");

app.use(express.json());

app.use("/pages", page);

mongoose.connection;

app.listen(3000, () => {
  console.log("Server is running!");
});
