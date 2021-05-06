const fs = require('fs');

console.log('before : ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./readme.txt');
const writeStream = fs.createWriteStream('./readme-stream.txt.gz');

readStream.pipe(writeStream);
readStream.on('end', ()=> {
    console.log('stream : ', process.memoryUsage().rss);
});