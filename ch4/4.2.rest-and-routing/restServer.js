const http = require('http');
const fs = require('fs').promises;

/**
 * GET 메소드 일 때 url 로 요청 주소 구분
 * -> url 에 맞는 html 제공
 */

const users = {}; //데이터 저장용

http.createServer(async (req, res) => {
    try {
        console.log('start...');
        console.log(req.method, req.url);
        if (req.method === 'GET') {
            if (req.url === '/') { // Main 페이지
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
                return res.end(data); // 읽은 데어터 버퍼를 그대로 클라이언트에 보냄
            } else if(req.url === '/about') { // about 페이지
                const data = await fs.readFile('./about.html');
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
                return res.end(data); // 읽은 데어터 버퍼를 그대로 클라이언트에 보냄
            } else if(req.url === '/users') {
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
                return res.end(JSON.stringify(users));
            }

            // main, about, users 도 아닐 때
            try {
                console.log(`.${req.url}`);
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);            
            } catch (err) {
                
            }

        } else if (req.method === 'POST') {
            console.log('post');
            if (req.url === '/user') {
                let body  = '';
                // 요청의 body 를 stream 으로 받음
                req.on('data', (data)=> {
                    body += data;
                });
                // body 다 받은 후 실행
                return req.on('end', ()=> {
                    console.log('post body : ', body);
                    const { name } = JSON.parse(body);
                    const id = Date.now();

                    users[id] = name;
                    res.writeHead(201);
                    res.end('등록 성공');
                });
            }
        } else if (req.method === 'PUT') {
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                console.log(key);
                let body  = '';
                // 요청의 body 를 stream 으로 받음
                req.on('data', (data)=> {
                    body += data;
                });
                return req.on('end', ()=> {
                    console.log('put body : ', body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                });
            }
        } else if (req.method === 'DELETE') {
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }

        res.writeHead(404);
        return res.end('NOT FOUND');
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.end(err.message)
    }
})
.listen(8082, ()=> {
    console.log('8082 port wait...');
});