const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme-gzip.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);