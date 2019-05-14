const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Page = require("../models/entityPage");


router.get("/", (req, res) => {
  //Все статьи
  Page.find((err, pages) => {
    if (err) throw err;
    console.log(pages);
  });
  
  res.send("All pages");
});

router.get("/:id", (req, res) => {
  //Статья по id
  console.log(req.query);
  res.send(`id - ${req.params.id}`);
});

router.post("/create", (req, res) => {
  //Создание статьи
  const header = req.body.header;
  const text = req.body.text;
  const dateCreate = `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`;
  const dateUpdate = dateCreate;
  const slug = `${header}${dateCreate}`;

  const newPage = new Page({
    _id: new mongoose.Types.ObjectId(),
    header: header,
    text: text,
    slug: slug,
    dateCreate: dateCreate,
    dateUpdate: dateUpdate,
  });

  newPage.save((err) => {
    if (err) throw err;
    console.log("Page was added!");
  });
  
  res.send(`Page create!`);
});

module.exports = router;

