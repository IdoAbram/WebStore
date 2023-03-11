const mongoose = require("mongoose");

const Review=new mongoose.Schema({
    Title:String,
    userId:Number,
    ProductId:String,
    text:String,
    Rating:{
      type:Number,
      enum:[1,2,3,4,5]
    },
    Images_Videos:[String] //String of videos
  });

  module.exports = mongoose.model("review", Review);