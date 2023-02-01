const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const Port = process.env.PORT 
mongoose.set(`strictQuery`, true);
require(`./connection`)
const ProductSchema = require('./schema')




app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
})