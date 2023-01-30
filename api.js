const express =require('express');
const app = express();
const dbConnect = require('./mongodb');
const port = 5200;
const ObjectID = require("mongodb").ObjectId;

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

app.put('/:_id',async (req,res)=>{
    // console.warn(req.body)
    const {_id} = req.params;
    let db = await dbConnect()
    let result = db.updateOne(
      { _id: ObjectID(`${_id}`) },
      { $set: req.body }
    );
    console.log(_id)
    console.log(req.body)
    res.send({result:"updated"})
})


app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})