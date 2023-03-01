
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
const Customer = require("./Model/Schemas/Customer")
mongoose.set('strictQuery', false);


mongoose.connect("mongodb://127.0.0.1:27017",()=>{console.log("Connected")})


    const customerRouter = require('./Routes/customers')
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.use('/customers',customerRouter);
    app.listen(3000)

run()


async function run(){

    const customer = new Customer({Name:"Alon",lastName:"Michaeli",address:"MM",moneySpent:10.0,wishList:["Hello"],shoppingCart:["Hello"],orders:["Hello"],email:"111@gmail.com",password:"1234",creditCards:["Hello"]})
    const customer2 = new Customer({Name:"Ido",lastName: "Shimon",address: "George IV",moneySpent: 1004.4,wishList: ["HogLegacy"],shoppingCart: ["Aleph"],orders:["An Order"],email:"idodi5@gmail.com",password:"213123",creditcards:["334234","43223"]})
  
   /*
    await customer.save().then(()=> console.log("Saved Alon"));
    await customer2.save().then(()=>console.log("Saved Ido"))
  */

    await console.log(await Customer.count())
}


