const express = require('express')
const multer = require('multer')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const Port = process.env.PORT

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'../mongooseAPI/uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now()+".jpg")
        }
    })
}).single('user_file')

app.post(`/upload`, upload, (req,res)=>{
    res.send(`file uploaded`)
})

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
})