// const express = require("express");
const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    image_hover: { type: String, required: false },
    name: { type: String, required: true },
    reviews: { type: String, required: false },
    display_price: { type: String, required: false },
    price: { type: String, required: true },
    size: { type: String, required: false },
    type: { type: String, required: true },
    discription: { type: String, required: false },
    fruit: { type: String, required: false },
    skin_concern: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", prodSchema);
module.exports = Product;
