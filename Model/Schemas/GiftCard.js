const mongoose = require("mongoose");

const GiftCard=new mongoose.Schema({
  price:Number,
  Description: String
});

module.exports = mongoose.model("giftCard",GiftCard);