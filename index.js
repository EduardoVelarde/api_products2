const express = require('express')
const app= express();
const routerProducts=require('./Routers/api')
const colors=require('colors')
const emoji=require('node-emoji');
const router = require('./Routers/api');
const PORT= 8080
app.use(express.json())
app.use("/api",routerProducts);


app.listen(PORT,()=>{
    console.log(emoji.get('coffee')+colors.yellow(`Listening on port ${PORT}`))
})