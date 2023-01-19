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


// include http module in the file
const http = require('http');
 
// create a server
http.createServer = ((req, res) => {
    // http header
    // 200 - is the OK message
    // to respond with html content, 'Content-Type' should be 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('Node.js says hello!'); //write a response to the client
    res.end(); //end the response
}).listen(9000); //the server object listens on port 9000