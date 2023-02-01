const mongoose = require('mongoose')
mongoose.set("strictQuery", true)

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

const Product = mongoose.model(`products`,ProductSchema)

module.exports = Product