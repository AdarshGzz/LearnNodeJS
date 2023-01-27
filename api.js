const express =require('express');
const app = express();
const dbConnect = require('./mongodb');
const port = 5200;

app.use(express.json());

app.get('/',async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
}) 

app.post('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result);
})

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})