
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Customers = require("./Model/Schemas/Customer");
mongoose.set('strictQuery', false);


mongoose.connect("mongodb://127.0.0.1:27017",()=>{console.log("Connected")})


run()
async function run(){

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.use('/customers')
    


}




/*


const customer = new Customer({Name:"Alon",lastName:"Michaeli",address:"MM",moneySpent:10.0,wishList:["Hello"],shoppingCart:["Hello"],orders:["Hello"],email:"111@gmail.com",password:"1234",creditCards:["Hello"]})
const customer2 = await Customer.create({Name:"Ido",lastName: "Shimon",address: "George IV",moneySpent: 1004.4,wishList: ["HogLegacy"],shoppingCart: ["Aleph"],orders:["An Order"],email:"idodi5@gmail.com",password:"213123",creditcards:["334234","43223"]})
/*
await customer.save().then(()=> console.log("Saved Alon"));
await customer2.save().then(()=>console.log("Saved Ido"))


const Cust3 = await Customers.findById("63fcde17413cfe4cc8d6cf3f")
await console.log(Cust3.lastName)

*/
