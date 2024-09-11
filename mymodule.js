const fs = require("fs");
const path = require("path");

const myfunction = (dirname,ext,callback) => {
    fs.readdir(dirname,(err,data) => {
        if (err) {
            return callback(err);
        }

        let result = "";
        for(const filename of data)  {
            const arrfilename = filename.split(".");
            if (arrfilename.length > 1 && arrfilename.at(-1) === ext) {
                result += filename + "\n";
            }
        }

        //result = result.trim("\n");

        callback(null,
            data.filter((name) => {
                return "." + ext === path.extname(name);
            })
        );
    });
};

module.exports = myfunction;