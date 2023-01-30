const {MongoClient} = require('mongodb')
const port = 27017
const url = `mongodb://localhost:${port}`
const client = new MongoClient(url);
const dataBase = 'HustlerIsCoding'
const ObjectID = require("mongodb").ObjectID; 


async function dbConnect() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return (db.collection("comments"));
}

module.exports = dbConnect;
