const mongoose = require("mongoose");

const Product=new mongoose.schema({
    Title: String,
    price: Number,
    Supplier_Id: Number,
    Description: String,
    shortDescription: String,
    Reviews: [String],
    AmountAvailable: Number,
    IsAvailableSuppliers: Boolean,
    Rating:{
        type: Number,
        required: true,
        enum:[1,2,3,4,5]
    },
    Pictures: [String],
    Tags: String
  });

  
module.exports = mongoose.model("product", Product);