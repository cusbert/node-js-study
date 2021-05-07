const http = require('http');

const server = http.createServer((req, res) => {
    // response 내용
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    res.write('<h1>hello world</h1>');
    res.end('<h1>hello node</h1>');
})
server.listen(8080);

server.on('listening', () => {
    console.log('waiting 8080 server'); // 실행되는 콜백 함수
});

server.on('error', (error) => {
    console.errror(error); // 실행되는  함수
});

// 서버 동시에 여러개 띄우기
http.createServer((req, res) => {
    // response 내용
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    res.write('<h1>hello world</h1>');
    res.end('<h1>hello node</h1>');
}).listen(8081, ()=> { // 지정된 port 로 서버 연결
    console.log('waiting 8081 server'); // 실행되는 콜백 함수
});