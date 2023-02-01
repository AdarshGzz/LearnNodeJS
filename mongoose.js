const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require('mongoose')
const DB = `${process.env.URL}`
const userSchema = require('./modalsDB')
mongoose.set("strictQuery", true)

const port = 5200

mongoose.connect(DB,(err)=>{
    if(err){
        console.log(`unable to connect to the server: ${err}`)
    }else{
        console.log(`server is connected to database`)
    }
})

const saveInDB = async () => {
    const UserModel = mongoose.model(`userModel`,userSchema)
    let data = new UserModel({
        name: `test`,
        email: `test@example.com`,
        mobile: 9394758346
    })
    const result = await data.save()
    console.log(result)
}
// saveInDB()


const updateInDB = async () =>{
    const userModel = mongoose.model(`userModel`,userSchema)
    let data = await userModel.updateOne(
        {name:`test`},
        {$set:{email:`updatedtest@example.com`}}
    )
    if(data.acknowledged=true){
        console.log(`updated`)
    }
}
// updateInDB()


const deleteInDB = async() => {
    const userModel = mongoose.model(`userModel`,userSchema)
    let data = await userModel.deleteOne(
        {name:`test`}
    )
    if(data.acknowledged=true){
        console.log(`deleted`)
    }
}
// deleteInDB()


const findInDB = async () => {
    try {
        const userModel  = mongoose.model(`userModel`,userSchema)
        let data = await userModel.find({
            name:`Adarsh gupta`
        })
        console.log(data)
    } catch (error) {
        console.log(`can not find DB due to error: ${error}`)
    }
}
// findInDB()


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})