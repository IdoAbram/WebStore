const mongoose = require("mongoose");

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
      type: [Product],
      required: true
    },
    
    moneyGiven: Number,
    outGoingOrders: [Orders],
    pastOrders: [Orders],
    
  
  
  });

  module.exports = mongoose.model("supplier", Supplier);