const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie.split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
        // console.log("acc : ", acc);
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log("cookies : ", cookies);

    // 주소가 /login 으로 시작할 때 
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        console.log("query ====> ", query);  // name=cookiename
        const { name } = qs.parse(query); // cookiename
        const expires = new Date();

        //쿠키 유효 시간 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toUTCString()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if(cookies.name) { // name 이라는 쿠키 있을 때
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
        res.end(`${cookies.name} 님 안녕하세요`)
    } else { // 쿠키가 없다면 로그인 할 수 있는 페이지로 보냄 -> cookie2.html
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
            res.end(data); 
        } catch(err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type' : 'text/html; charset=utf-8' });
            res.end(err.message)
        }
    }
    
}).listen(8080, ()=> {
    console.log('waiting 8080 server');
});