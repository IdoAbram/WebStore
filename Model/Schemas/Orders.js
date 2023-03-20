const mongoose = require("mongoose");

const Orders=new mongoose.Schema({
    PriceOfOrder: Number,
    ShippingPrice: Number,
    ShippingCompany: String,
    DateIssued: Date,
    ExpectedArrival: Date,
    products:[String] //Array of ids of products
  });
  

  module.exports = mongoose.model("orders", Orders);