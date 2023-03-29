const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Supplier = new mongoose.Schema({

    Name:{
      type: String,
      required: true 
    },
    lastName:{
      type: String,
      required: true 
    },
  
    products:{
      type: [String], // Ids of products
      required: true
    },
    
    moneyGiven: Number,
    outGoingOrders: [String], // Ids of Orders
    pastOrders: [String],
    email: String, 
    location: String,
    password: String
  
  });

  module.exports = mongoose.model("supplier", Supplier);