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
    type:Double,
    default: 0,
    required: true
  },
  wishList: [String], //Every string represents an item (Hashset)
  shoppingCart: [String], // As above (Hashset)
  orders: [String], // As above (Order id which will be in a hashset)
  email: String, 

  password: {
    type: String,
    required: true,
  },

  creditCards:[String]


});

const Admin=new mongoose.schema({
  Name: String,
  lastName: String,
  Email: String,
  password: String,
  Priveleges:{
    type: Array,
    enum:[0,1,2]
  }
});

const GiftCard=new mongoose.schema({
  typeOfDiscount:{
    type:String,
    enum:["Precentages","Numbers"]
  },
  price:Double,
  code:String,
  Desription: String
});

const Review=new mongoose.schema({
  Title:String,
  userId:Number,
  ProductId:String,
  text:String,
  Rating:{
    type:Double,
    enum:[1,2,3,4,5]
  },
  Images_Videos:Array
});

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

const Orders=new mongoose.schema({
  PriceOfOrder: Double,
  ShippingPrice: Double,
  ShippingCompany: String,
  DateIssued: Date,
  ExpectedArrival: Date,
  products:[Product]
});


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


module.exports = mongoose.model("customer", Customer,"admin",Admin,"giftCard",GiftCard,"review",Review,"product",Product,"orders",Orders,"supplier",Supplier);
