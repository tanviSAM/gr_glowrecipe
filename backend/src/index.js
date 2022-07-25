const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connect = require("./config/db");

app.use(express.json());

const productController = require("./controllers/product.controllers");
app.use("/products", productController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening on port 3000");
  } catch (err) {
    console.log(message.err);
  }
});
