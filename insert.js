const dbConnect = require('./mongodb');

const insert = async()=>{
    const db = await dbConnect();
    const result = await db.insertOne(
        {"name":"note 5","lang":"vivo","member since":7 }
    )
    if(result.acknowledged){
        console.log('data inserted');
    }
    else{
        console.log('data not inserted');
    }
}

insert();