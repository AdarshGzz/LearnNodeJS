const fs = require("fs");

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