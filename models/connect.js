const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pages", { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log("Successfully connected!");
});

module.exports = mongoose;


