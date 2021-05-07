const http = require('http');

http.createServer((req, res) => {
    // response 내용
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    res.write('<h1>hello world</h1>');
    res.end('<h1>hello node</h1>');
}).listen(8080, ()=> { // 지정된 port 로 서버 연결
    console.log('waiting 8080 server'); // 실행되는 콜백 함수
});