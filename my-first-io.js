const pathFile = process.argv[2];

if (!pathFile) process.exit(-1);

const fs = require("fs");

const objBufferedFile = fs.readFileSync(pathFile);

console.log(str.split("\n"));

const arrFile = str.split("\n");
console.log(arrFile.length - 1);

// one line solution

console.log(
    process.argv[2]
    ? fs.readFileSync(process.argv[2].toString().split("\n").length - 1) : process.exit()
);

