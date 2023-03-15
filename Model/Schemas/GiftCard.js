const mongoose = require("mongoose");

const GiftCard=new mongoose.schema({
    Discount: Number,
    price:Number,
    code:String,
    Description: String
  });

  module.exports = mongoose.model("giftCard",GiftCard);