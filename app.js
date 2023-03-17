
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require("http").createServer(app);
const io =  require("socket.io")(server,{cors:{origin:"*"}});
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
var path = require('path');



mongoose.set('strictQuery', false);
const Customer = require("./Model/Schemas/Customer");
const Product = require("./Model/Schemas/Product");
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  }));


mongoose.connect("mongodb://127.0.0.1:27017")


    const loginRouter = require('./Routes/login')
    const customerRouter = require('./Routes/customers')
    const productRouter = require('./Routes/products')
    const homePageRouter = require('./Routes/HomePage')
    const storeRouter = require('./Routes/store')
    const productPageRouter = require('./Routes/prPage')
    const cartRouter=require('./Routes/cart')
    const infoRouter=require('./Routes/info')
    const chatRouter=require('./Routes/adminchat')
    app.use(express.static(path.join(__dirname+'/View')))
    app.use(express.static(path.join(__dirname+'/View/HomePage')))
    app.use(express.static(path.join(__dirname+'/View/GenericProductPage')))
    app.use(express.static(path.join(__dirname+'/View/Info')))
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.use('/cart',cartRouter);
    app.use('/customers',customerRouter);
    app.use('/login',loginRouter);
    app.use('/products',productRouter);
    app.use('/homePage',homePageRouter);
    app.use('/store',storeRouter);
    app.use('/prPage',productPageRouter);
    app.use('/cart',cartRouter)
    app.use('/info',infoRouter)
    app.use('/chat',chatRouter)
    app.listen(3000)
    server.listen(3001,()=>{console.log("Server running...")})
   
  let onlineCount = 0;
    io.on('connection',(socket)=>{

      onlineCount++;  
      io.emit('updateOnlineCount',onlineCount);
  
      socket.on('disconnect',()=>
      {
        onlineCount--;
        io.emit('updateOnlineCount',onlineCount);
      })
      console.log("User connected "+ socket.id)
      socket.on("message",(data)=>{io.emit('message',data)});

    })

run()


async function run(){

}



