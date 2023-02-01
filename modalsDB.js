const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        upperCase: true
    },
    email:{
        type: 'string',
        required: true,
        lowerCase: true
    },
    mobile:{
        type:Number,
        default:12345678
    }
},
{
    versionKey:false
})



module.exports = userSchema