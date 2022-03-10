const express = require('express')
const server = express();
require('dotenv').config();
const PORT = process.env.PORT || 9000;



server.get('/', (req,res)=>{
    res.end('<h1>Hello World</h1>')
})





server.listen(PORT,()=>{

    console.log('server running on', PORT , process.env.USER) 
})

