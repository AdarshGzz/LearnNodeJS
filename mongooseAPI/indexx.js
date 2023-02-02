const express = require('express')
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')
const Product = require('./schema')
const { response } = require('express')
dotenv.config()
const app = express()
const Port = process.env.PORT 
const DB = process.env.URL
mongoose.set(`strictQuery`, true)
require(`./connection`)
app.use(express.json())


mongoose.connect(DB,(err)=>{
    if(err){
        console.log(`unable to connect: ${err}`)
    }
    else{
        console.log(`DB connected`)
    }
})

app.post(`/create`,async(req,res)=>{
    try {
        let data = new Product(req.body)
        const result = await data.save()
        res.send(result)
        console.log(`Data inserted`)
    } catch (error) {
        console.log(`Hee hee error : ${error}`)
    }
})

app.get(`/list`,async(req,res)=>{
    try {
        let data = await Product.find(req.body)
        res.send(data)
    } catch (error) {
        console.log(`Hee hee error : ${error}`);
    }
})

app.delete(`/delete`,async(req,res)=>{
    try{
        let data = await Product.deleteOne(req.body)
        res.send(data)
        console.log('deleted')
    }catch(error) {
        console.log(`Hee hee error : ${error}`);
    }
})
// using parameters
app.delete(`/delete/:id`, async (req, res) => {
  try {
    let data = await Product.deleteOne(req.params)
    res.send(data)
    console.log("deleted")
  } catch (error) {
    console.log(`Hee hee error : ${error}`)
  }
})

app.put(`/update/:id`, async (req, res) => {
    try{
        const data = await Product.updateOne(req.params,{$set:req.body})
        res.send(data)
        console.log("updated")
    }catch{
        console.log(`Hee hee error : ${error}`);
    }
})

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
})