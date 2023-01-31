const mongoose = require('mongoose')
const url = process.env.URL
mongoose.set("strictQuery", true)

const main = async() =>{
    await mongoose.connect(`${url}`)
    const defineSchema = new mongoose.Schema({
        'name':string,
    })

const Model = mongoose.model('comments',defineSchema)
let data = new Model({'name':haris})
let result = await data.save()
console.log(result);
}

main()