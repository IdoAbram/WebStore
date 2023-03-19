const mongoose = require("mongoose");

const Customer = new mongoose.Schema({

  Name:{
    type: String,
    required: true 
  },
  lastName:{
    type: String,
    required: true 
  },
  address: String,
  moneySpent:{
    type:Number,
    default: 0,
    required: true
  },
  wishList: [String], //Every string represents an item (Hashset)
  shoppingCart: {
    type: Map,
    of: Number
  }, // As above (Hashset)
  orders: [String], // As above (Order id which will be in a hashset)
  email: String, 

  password: {
    type: String,
    required: true,
  },

  creditCards:[String]


});


module.exports = mongoose.model("customer", Customer);