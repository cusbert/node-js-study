const fs = require('fs').promises;

// promoise 형식으로 fs 이용 
// fsPromises.readFile(path[, options])
// https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options
fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch(err => {
        console.error(err);
    });