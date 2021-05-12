const { RSA_NO_PADDING } = require('constants');
const express = require('express');
const path = require('path');

/**
 *  미들웨어 : 요청과 응답의 중간에 위치 
 *  app.use(미들웨어)
 * 
 */

const app = express(); // express 모듈 할당
app.set('port', process.env.PORT || 3000); // express 포트 설정


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