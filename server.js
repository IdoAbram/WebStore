
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io =  require("socket.io")(server,{cors:{origin:"*"}});


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




app.get("/chat",(req,res)=>res.render("../View/AdminChat/chat.ejs"))
