const mongoose = require("mongoose");

const GiftCard=new mongoose.Schema({
    Discount: Number,
    price:Number,
    code:String,
    Description: String
  });

  module.exports = mongoose.model("giftCard",GiftCard);