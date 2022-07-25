const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../model/product.model");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send(products);
  } catch (err) {
    console.log("Error: ", err);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (err) {
    console.log("Error: ", err);
  }
});

module.exports = router;
