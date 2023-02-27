const mongoose = require("mongoose");

const GiftCard=new mongoose.schema({
    typeOfDiscount:{
      type:String,
      enum:["Precentages","Numbers"]
    },
    price:Double,
    code:String,
    Desription: String
  });

  module.exports = mongoose.model("giftCard",GiftCard);