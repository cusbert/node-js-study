const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16}); //읽기 스트림 생성 16b 로 나눠서 보냄
const data = [];

readStream.on('data', (chunk) => { // 이벤트 리스너를 통해 chunk 로 나눠서 전달
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('err', () => {
    console.log('err: ');
});