const dbConnect = require('./mongodb');

const Delete = async() =>{
    const db = await dbConnect();
    const result = await db.deleteOne({ name:"max 3"});
    console.log(result);
}

Delete();