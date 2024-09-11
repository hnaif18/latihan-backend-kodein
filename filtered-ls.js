const pathdir = process.argv[2];
const extension = process.argv[3];

const fs = require ("fs");
fs.readdir(pathdir, (err,files) => {
    if (err) throw err;

    for (const filename of files) {
        if (filename.split(".")[1] === extension) {
            console.log(filename);
        }
    }
});