const express = require("express");

const server = express();

const middle1 = (req,resp,next) => {
    console.log("Hi, this is middleware 1");
    next();
}


server.get("/",middle1,(req,resp)=> {
    resp.send("Hello");
})

server.get("/new1",(req,resp)=>{
    resp.send("<h1>Hello</h1>")
})

server.listen(6000);