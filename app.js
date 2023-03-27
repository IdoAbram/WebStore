const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverChat = require("http").createServer(app);
const io =  require("socket.io")(serverChat,{cors:{origin:"*"}});


app.set('view engine', 'ejs');
const mongoose = require('mongoose');
var path = require('path');

mongoose.set('strictQuery', false);
const Customer = require("./Model/Schemas/Customer");
const Product = require("./Model/Schemas/Product");
const Admin = require("./Model/Schemas/Product");
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
}));

mongoose.connect("mongodb://127.0.0.1:27017")


    const AdminRouter = require('./Routes/admin')
    const loginRouter = require('./Routes/login')
    const customerRouter = require('./Routes/customers')
    const productRouter = require('./Routes/products')
    const homePageRouter = require('./Routes/HomePage')
    const storeRouter = require('./Routes/store')
    const productPageRouter = require('./Routes/prPage')
    const cartRouter=require('./Routes/cart')
    const buyPageRouter=require('./Routes/buyPage')
    const infoRouter=require('./Routes/info')
    const giftcardRouter = require('./Routes/giftCards');
    const chatRouter=require('./Routes/adminchat');
    const graphRouter= require('./Routes/graph')
    const orderRouter = require('./Routes/order');
    const reviewRouter = require('./Routes/reviews');

    app.use(express.static(path.join(__dirname+'/View')))
    app.use(express.static(path.join(__dirname+'/View/HomePage')))
    app.use(express.static(path.join(__dirname+'/View/GenericProductPage')))
    app.use(express.static(path.join(__dirname+'/View/Info')))
    app.use(express.static(path.join(__dirname+'/View/Admin')))
    app.use(express.static(path.join(__dirname+'/View/GiftCards')))
    app.use(express.static(path.join(__dirname+'/View/Reviews')))
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.use('/orders',orderRouter);
    app.use('/cart',cartRouter);
    app.use('/customers',customerRouter);
    app.use('/login',loginRouter);
    app.use('/products',productRouter);
    app.use('/homePage',homePageRouter);
    app.use('/store',storeRouter);
    app.use('/prPage',productPageRouter);
    app.use('/cart',cartRouter);
    app.use('/buyPage',buyPageRouter);
    app.use('/cart',cartRouter)
    app.use('/info',infoRouter)
    app.use('/chat',chatRouter)
    app.use('/graph',graphRouter)
    app.use('/admin',AdminRouter)
    app.use('/giftCards',giftcardRouter)
    app.use('/reviews',reviewRouter)

    app.use((req,res)=>{
      res.status(404).render('../View/Sorry/sorry.ejs')
    })
    
    app.listen(3000)
    serverChat.listen(3001,()=>{console.log("serverChat running...")})   
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


/*
    fetch("https://graph.facebook.com/121786337504390/feed?message=Hello World!&access_token=EAAMkqB1d63MBAFv3VcY9KNrScTZAr28Tmp4ZCxSCeKVJKdo6a2w4LC5VjZA2jeMeCawN1OXcnzmWhG8JDkmzNmDm8nJZBMvPjMcrDf5DaAECvMvZCrOI3xgoYhf00ZCnUROY89MTKdeYHci3znf5uUCyg4qw4R24ArSDbym0WuSklbS5ZCNU9ch8mrpqrnTlpAZD",
    {method:'POST'})
    .then(resp=>resp.json()).then(data=>console.log(data))
*/
    


