const express = require('express');
const path = require('path');
const morgan = require('morgan'); // 요청에 대한 로그를 콘솔에 출력해줌
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv'); // 환경 변수 읽어들임
/** /
 *  미들웨어 : 요청과 응답의 중간에 위치 
 *  app.use(미들웨어)
 * 
 */
dotenv.config(); // dotenv 가 환경변수 읽어서 process.env 생성 -> ex) GET / 500 2.333 ms - 43
const app = express(); // express 모듈 할당
app.set('port', process.env.PORT || 3000); // express 포트 설정

app.use(morgan('dev')); // dev, combined, common, short 등 넣을수 있음
app.use('/', express.static(path.join(__dirname, 'public'))); // static 은 정적파일 제공하는 라우터
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie'
}));


app.use((req, res, next) => { // 주소 없음 -> 모든 요청에 대해 실행
    console.log('모든 요청에 다 실행 됩니다');
    next(); // 다음 미들웨어로 넘어간다
});

app.get('/', (req, res, next) => {  // 주소 있음 -> ''/' 요청에 대해 실행
    // res.send('hello express');
    // res.sendFile(path.join(__dirname, '/index.html'));
    console.log("GET 요청에만 실행");
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로....');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => { // 해당 포트로 서버 실행
    console.log(app.get('port'), ' port wait...');
});