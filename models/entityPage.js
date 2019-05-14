const mongoose = require("mongoose");

const pageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  header: String,
  text: String,
  slug: String,
  dateCreate: String,
  dateUpdate: String,
});



const Page = mongoose.model('Page', pageSchema);

module.exports = Page;