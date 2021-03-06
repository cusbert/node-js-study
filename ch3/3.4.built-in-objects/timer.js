//3.4.3 타이머

const timeout = setTimeout(() => {
    console.log('1.5 초후 실행')
}, 1500 );

const interval = setInterval(() => {
    console.log('1초 마다 실행')
}, 1000 );

const timeout2 = setTimeout(() => {
    console.log('노실행')
}, 3000 );

setTimeout(() => {
    clearTimeout(timeout2);
    clearTimeout(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
    console.log("노 실행");
});

clearImmediate(immediate2);