const express = require('express');
const server = express();
const path = require('path');

server.get('/',(req,res)=>{
    res.send ('Hola Mundo!!!')
})

server.get('/guille',(req,res)=>{
    res.send ('Hola Universo!!!')
})

server.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'.view/home.html'))
})

server.listen(3001,() => {
    console.log('Server is running in the port : 3001')
})