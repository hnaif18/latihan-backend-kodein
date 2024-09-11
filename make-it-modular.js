const pathdir = process.argv[2];
const extension =process.argv[3];

const myfunction = require("./mymodule");

myfunction(pathdir,extension,(err,result) => {
   err ? console.error (err):
        console.log(result.join("\n"));
    });