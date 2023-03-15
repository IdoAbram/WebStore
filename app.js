
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
const Customer = require("./Model/Schemas/Customer")
const Product = require("./Model/Schemas/Product")
const Admin = require('./Model/Schemas/Admin');
const Supplier = require('./Model/Schemas/Supplier');


mongoose.set('strictQuery', false);
var path = require('path');

mongoose.connect("mongodb://127.0.0.1:27017")


const loginRouter = require('./Routes/login')
    const customerRouter = require('./Routes/customers')
    const productRouter = require('./Routes/products')
    const homePageRouter = require('./Routes/HomePage')
    const storeRouter = require('./Routes/store')
    const productPageRouter = require('./Routes/prPage')
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname+'/View')))
    app.use(express.static(path.join(__dirname+'/View/HomePage')))
    app.use(express.static(path.join(__dirname+'/View/GenericProductPage')))
    app.use('/customers',customerRouter);
    app.use('/login',loginRouter);
    app.use('/products',productRouter);
    app.use('/homePage',homePageRouter);
    app.use('/store',storeRouter);
    app.use('/prPage',productPageRouter);

    app.listen(3000)
run()


async function run(){

    const customer = new Customer({Name:"Alon",lastName:"Michaeli",address:"MM",moneySpent:10.0,wishList:["Hello"],shoppingCart:["Hello"],orders:["Hello"],email:"111@gmail.com",password:"1234",creditCards:["Hello"]})
    const customer2 = new Customer({Name:"Ido",lastName: "Shimon",address: "George IV",moneySpent: 1004.4,wishList: ["HogLegacy"],shoppingCart: ["Aleph"],orders:["An Order"],email:"idodi5@gmail.com",password:"213123",creditcards:["334234","43223"]})
   /*
    await customer.save().then(()=> console.log("Saved Alon"));
    await customer2.save().then(()=>console.log("Saved Ido"))
  */
 //await admin1.save();
 //await supplier.save();

    console.log(await Customer.count())
    console.log(await Product.count())
    console.log(await Admin.count())
    console.log(await Supplier.count());
    
}



