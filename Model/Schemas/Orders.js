const mongoose = require("mongoose");

const Orders=new mongoose.schema({
    PriceOfOrder: Double,
    ShippingPrice: Double,
    ShippingCompany: String,
    DateIssued: Date,
    ExpectedArrival: Date,
    products:[Product]
  });
  

  module.exports = mongoose.model("orders", Orders);