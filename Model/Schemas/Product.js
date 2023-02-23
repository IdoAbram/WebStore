const mongoose = require("mongoose");

const Product=new mongoose.schema({
    Title: String,
    price: Double,
    Supplier_Id: Number,
    Description: String,
    Reviews: Array,
    AmountAvailable: Double,
    IsAvailableSuppliers: Boolean,
    Rating:{
        type: Double,
        required: true,
        enum:[1,2,3,4,5]
    },
    Pictures: Array,
    Tags: String
  });

  module.exports = mongoose.model("product", Product);