const http = require('http');
const fs = require('fs').promises;


http.createServer(async(req, res) => {
    try {
        const data = await fs.readFile('./serverTemplate.html'); // fs 이용하여 파일 읽음
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.end(data); // 읽은 데어터 버퍼를 그대로 클라이언트에 보냄
    } catch(err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.end(err.message)

    }
})
.listen(8081, ()=> {
    console.log('waiting 8080 server'); // 실행되는 콜백 함수
});