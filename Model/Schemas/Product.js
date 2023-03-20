const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    Title: String,
    price:{
      type: Number,
      required: true,
    } ,
    Supplier_Id: String,
    Description: String,
    shortDescription: String,
    Reviews: [String],
    Rating:{
        type: Number,
        required: true,
        enum:[0,1,2,3,4,5]
    },
    Pictures: [String],
    Tags: [String],
    Sizes: [String]
  });

  
module.exports = mongoose.model("product", Product);