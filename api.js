const express =require('express');
const app = express();
const dbConnect = require('./mongodb');
const port = 5200;

app.get('/',async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
})

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})