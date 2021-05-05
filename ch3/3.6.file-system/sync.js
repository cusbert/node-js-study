/**
 * Sync 파일 읽기
 * 성능 이슈 발생 가능함
 */
const fs = require('fs');


console.log("start");

let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());


console.log("end");
