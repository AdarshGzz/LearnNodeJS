const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require(`./schema`)
require(`./connection`)

const Port = process.env.PORT
const DB = process.env.URL

dotenv.config()
mongoose.set("strictQuery", true)
const app = express()
app.use(express.json())

mongoose.connect(DB,(err)=>{
    if(err){
        console.log(`DB not connected due to error: ${err}`)
    }else{
        console.log(`DB connected`)
    }
})

app.get(`/search/:key`, async(req,res) => {
    try{
        const data = await Product.find(
            {
                '$or':[
                    {name:{$regex:req.params.key}},
                    {brand:{$regex:req.params.key}},
                    {category:{$regex:req.params.key}}
                ]
            }
        )
        res.send(data)
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
})



app.listen(Port,()=>{
    console.log(`listening on http://localhost:${Port}`)
})