
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io =  require("socket.io")(server,{cors:{origin:"*"}});
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
const session = require('express-session');

mongoose.connect("mongodb://127.0.0.1:27017")

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  }));


const adminRouter = require('./Routes/adminchat')


app.use('/chat',adminRouter)

server.listen(3001,()=>{
    console.log("Server running...")
})




onConnect()


function onConnect(){
    io.on('connection',(socket)=>{

        console.log("User connected "+ socket.id)
        socket.on("message",(data)=>{
            socket.broadcast.emit('message',data)
        });


    });




}


