const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt');
const writeStream = fs.createWriteStream('./writeme3.txt');
readStream.pipe(writeStream); // 스트림끼리 연결 : readStream 을 읽어서 writeStream 으로 내려감