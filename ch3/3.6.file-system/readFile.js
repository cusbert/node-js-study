const fs = require('fs');

// fs.readFile(path[, options], callback) : 파일 읽기 -> buffer 
// https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }

    console.log(data);
    console.log(data.toString());
});