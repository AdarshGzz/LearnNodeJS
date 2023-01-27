const dbConnect = require('./mongodb');

const update = async() => {
   let db = await dbConnect();
   let result = await db.updateOne(
        {name:"note 5"},{$set:{name:"max 3"}}
   )
   if(result.acknowledged){
    console.log("data updated")
   }
   else{
    console.log("data not updated")
   }
}

update();