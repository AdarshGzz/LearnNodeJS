const fs = require("fs");

//creating an new file

fs.writeFileSync("read.txt","my name is Adarsh, welcome to hollow world");

//adding data to a file
fs.appendFileSync("read.txt","this text is appended");

// reading data from file
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
// buffer data to string
console.log(buf_data.toString());