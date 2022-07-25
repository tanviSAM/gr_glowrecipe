const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://gr_glowrecipe:cloud98451213511@cluster0.umus5cw.mongodb.net/test"
  );
};
module.exports = connect;
