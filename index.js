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

const http = require('http');
const port = 4500;

const requestHandler = (request,response) => {
    console.log(request.url);
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(
      JSON.stringify({
        name: "adarsh",
        id: "akjkd",
        description: "dsjfksdfld",
        location: "kjdfklsjdkl",
        password: 8347838,
      })
    );
    response.end();
}

const server = http.createServer(requestHandler);

server.listen(port,(err) =>{
    if(err){
        return console.log('something is wrong',err);
    }
    console.log(`listening on ${port}`);
});