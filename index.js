// const fs = require("fs");

// ////creating an new file

// fs.writeFileSync("read.txt","my name is Adarsh, welcome to hollow world");

// ////adding data to a file
// fs.appendFileSync("read.txt","this text is appended");

// //// reading data from file
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);
// //// buffer data to string
// console.log(buf_data.toString());

////////////////////////////////////////////////////////////////

//// node js crude operations

// fs.mkdirSync("adarsh");
// fs.writeFileSync('./adarsh/bio.txt'," hello this is me");
// fs.appendFileSync('./adarsh/bio.txt',"wellcome to hollow world");
// console.log(fs.readFileSync("./adarsh/bio.txt"), "Utf8");
// fs.renameSync("myBio.txt","./adarsh/mybio.txt");
// fs.unlinkSync("./adarsh/mybio.txt");
// fs.rmdirSync("adarsh");

///////////////////////////////////////////////////////////////////////////

// //// creating a basic server

// const http = require("http");
// http
//   .createServer((res, req) => {


//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(
//       JSON.stringify({
//         name: "adarsh",
//         id: "akjkd",
//         description: "dsjfksdfld",
//         location: "kjdfklsjdkl",
//         password: 8347838,
//       })
//     );
//     res.end();
//   }).listen(4500);

// ///////////////////////////////////////////////////////////////////////////

// // const colors = require('colors');

// // console.log("hello".red);


// content of index.js
// const http = require('http')
// const port = 3000

// const requestHandler = (request, response) => {
//   console.log(request.url)
//   response.writeHead(200,{'Content-Type': 'application/json'});
//   response.write(
//     JSON.stringify({
//       name: "adarsh",
//       id: "akjkd",
//       description: "dsjfksdfld",
//       location: "kjdfklsjdkl",
//       password: 8347838,
//     })
//   );
//   response.end();
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

////////////////////////////////

// const http = require('http');
// const port = 4500;
// const data = require('./data');

// const requestHandler = (request,response) => {
//     console.log(request.url);
//     response.writeHead(200,{'Content-Type':'application/json'});
//     response.write(JSON.stringify(data));
//     response.end();
// }

// const server = http.createServer(requestHandler);

// server.listen(port,(err) =>{
//     if(err){
//         return console.log('something is wrong',err);
//     }
//     console.log(`listening on ${port}`);
// });

////////////////////////////////

// const fs = require('fs');

// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('invalid output')
// }

////////////////////////////////

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname,'files/')

// // for(let i=0;i<5;i++){
// //     fs.writeFileSync(`${dirPath}hello${i}.txt`,"a simple text file")
// // }

// // fs.readdir(dirPath,(err,items)=>{
// //     console.warn(items)
// // });
// // fs.readdir(dirPath,(err,items)=>{
// //     items.forEach((item)=>{
// //         console.log(item)
// //     })
// // });

////////////////////////////////

// let a= 20;
// let b= 0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(30);
//     }, 2000);
// })

// waitingData.then((data)=>{
//     b = data;
//   console.log(a+b)
// });

////////////////////////////////////////////////////////////////

// const fs = require('fs');
// fs.mkdir("adarsh",(err)=>{
//   console.log("folder created")
// });
// fs.writeFile("./adarsh/bio.txt","my name is adarsh",(err)=>{
//   console.log("file created");
// })
// fs.appendFile("./adarsh/bio.txt"," i will be better than every one i know in all aspects",()=>{
//   console.log("file appended");
// })
// fs.readFile("./adarsh/bio.txt",'utf-8',(err,data)=>{
//   console.log(data);
// })
// fs.rename('./adarsh/bio.txt','./adarsh/Bio.txt',()=>{
//   console.log("renamed")
// })
// fs.unlink("./adarsh/bio.txt",()=>{
//   console.log("file deleted");
// })
// fs.rmdir("./adarsh",()=>{
//   console.log("folder deleted");
// })

////////////////////////////////////////////////////////////////////////

// handeling asynchronus js

// let a = 20;
// let b =0;

// let waitingData = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// })
// waitingData.then((data)=>{
//   b=data;
//   console.log(a+b)
// })

////////////////////////////////////////////////////////////////////////

// // starting expressjs

// const express = require('express')
// const app = express()
// const port = 8080;

// app.get('',(req,res)=>{
//     console.log(req.query.name)
//     res.send("this is a hollow world "+ req.query.name)
// })

// app.get('/about',(req,res)=>{
//     res.send("and i live here")
// })

// app.get('/help',(req,res)=>{
//     res.send("help i live here")
// })

// app.listen(port)

////////////////////////////////////////////

// const express = require('express');
// const app  =  express();
// const path = require('path');
// const fs = require('fs');
// const port= 5100;

// const publicPath = path.join(__dirname,`public`);
// // app.use(express.static(publicPath));
// app.get('',(req, res) =>{
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/aboutme',(req, res) =>{
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help',(req, res) =>{
//     res.sendFile(`${publicPath}/help.html`)
// })

// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/404.html`)
// })

// app.listen(port)

////////////////////////////////////////////////////////////////

// // working with ejs engine and dyanmic routing

// const express = require('express');
// const app  =  express();
// const path = require('path');
// const fs = require('fs');
// const port= 5100;

// const publicPath = path.join(__dirname,`public`);
// app.set('view engine','ejs');

// app.get('',(req, res) =>{
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/aboutme',(req, res) =>{
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help',(req, res) =>{
//     res.sendFile(`${publicPath}/help.html`)
// })

// app.get('/profile',(req,res)=>{
//     const user = {
//       name: "adarsh",
//       email: "adarsh@gmail.com",
//       city: "sdl",
//       skills:['c++','html','css','javascript']
//     };
//     res.render('profile',{user})
// })

// app.get('/login',(req,res)=>{
//     res.render('login');
// })

// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/404.html`)
// })


// app.listen(port)


////////////////////////////////////////////////////////////////////
// // middlewares(application level)

// const express = require('express');
// const app = express();
// const path = require('path');
// const { listenerCount } = require('process');
// const port = 5100;

// const reqFilter = (req,res,next) =>{
//     if(!req.query.age){
//         res.send("please provied age");
//     }
//     else if(req.query.age<18){
//         res.send("you are under age");
//     }
//     else{
//       next();
//     }
// }
    
// app.use(reqFilter);

// app.get('',(req,res)=>{
//     res.send('Welcome')
// })

// app.listen(port);

////////////////////////////////////////////////////////////////////
// // middlewares(route level)

// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware')
// const path = require('path');
// const port = 5100;
// const route = express.Router();
// route.use(reqFilter);

// app.get('',(req,res)=>{
//     res.send('Welcome')
// })

// app.get('/home',reqFilter,(req,res)=>{
//     res.send('Welcome');
// })

// route.get('/contact',(req,res)=>{
//     res.send('this is contact page');
// })
// app.use('/',route);

// app.listen(port);

////////////////////////////////////////////////////////////////////////
////using mongodb in nodeJs
// const {MongoClient} = require('mongodb');
// // //or//
// // const mongoClient = require('mongodb').mongoClient;
// const url = 'mongodb://localhost:27017';//Mongodb url
// const client = new MongoClient(url);
// const database = 'HustlerIsCoding';

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('comments');
//     let response = await collection.find({name:'adarsh'}).toArray();
//     console.log(response);
// }
// getData();
////////////////////////////////////////////////////////////////////////
////making mongodb connections function 
const {MongoClient} = require('mongodb');
// //or//
// const mongoClient = require('mongodb').mongoClient;
const url = 'mongodb://localhost:27017';//Mongodb url
const client = new MongoClient(url);
const database = 'HustlerIsCoding';

const dbConnect = require('./mongodb')
// dbConnect().then((res)=>{
//    res.find().toArray().then((data)=>{
//     console.warn(data);
//    });
// });

const main = async () =>{
    let data = await dbConnect();
    data= await data.find().toArray();
    console.warn(data);
}
main();