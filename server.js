const express = require('express');
const server = express();

server.get('/',(req,res)=>{
    res.send ('Hola Mundo!!!')
})

server.get('/guille',(req,res)=>{
    res.send ('Hola Universo!!!')
})




server.listen(3001,() => {
    console.log('Server is running in the port : 3001')
})