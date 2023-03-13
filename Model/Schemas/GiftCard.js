const mongoose = require("mongoose");

const GiftCard=new mongoose.schema({
    typeOfDiscount:{
      type:String,
      enum:["Percentages","Numbers"]
    },
    price:Number,
    code:String,
    Description: String
  });

  module.exports = mongoose.model("giftCard",GiftCard);