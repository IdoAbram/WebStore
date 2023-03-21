const mongoose = require("mongoose");

const GiftCard=new mongoose.Schema({
  isBought: Boolean,
  price:Number,
  Description: String
});

module.exports = mongoose.model("giftCard",GiftCard);