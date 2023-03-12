const mongoose = require("mongoose");

const Admin=new mongoose.schema({
    Name: String,
    lastName: String,
    Email: String,
    password: String,
    Privileges:{
      type: Number,
      enum:[0,1,2]
    }
  });

  module.exports = mongoose.model("admin", Admin);