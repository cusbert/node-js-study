// promise 로 비동기로 처리하되 순서대로 파일 읽기

const fs = require('fs').promises;

console.log("start");

fs.readFile('./readme.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        console.log("end");
    })
    .catch(err => {
        console.error(err);
    });

    console.log("end...");