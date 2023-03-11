const mongoose = require("mongoose");

const Review=new mongoose.Schema({
    Title:String,
    userId:Number,
    ProductId:String,
    text:String,
    Rating:{
      type:Double,
      enum:[1,2,3,4,5]
    },
    Images_Videos:Array
  });

  module.exports = mongoose.model("review", Review);