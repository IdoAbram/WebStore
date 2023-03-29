const mongoose = require("mongoose");

const Review=new mongoose.Schema({
    Title:String,
    userId:String,
    ProductId:String,
    text:String,
    Rating:{
      type:Number,
      enum:[1,2,3,4,5]
    },
    
  });

  module.exports = mongoose.model("review", Review);