/**
 * async 파일 읽기 -> 동시에 다른일 처리 가능, 순서보장 안됨
 * 비동기메소드가 백그라운에 요청을 하고 다음 작업으로 넘어감
 * -> 작업 완료
 * -> 백그라운드가 완료됨을 메인스레드에 알림
 * -> 메인스레드가 콜백 함수 처리
*/

const fs = require('fs');

console.log("start");

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }

    console.log('1번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }

    console.log('2번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }

    console.log('3번', data.toString());
});


console.log("end");
