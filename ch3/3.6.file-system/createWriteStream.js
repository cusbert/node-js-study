const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt'); // 쓰기 스트림 만듬

writeStream.on('finish', ()=> {
    console.log('완료');
});

writeStream.write('write 111\n');
writeStream.write('write 222');
writeStream.end();