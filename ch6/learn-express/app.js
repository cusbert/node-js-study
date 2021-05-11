const { RSA_NO_PADDING } = require('constants');
const express = require('express');
const path = require('path');

const app = express(); // express 모듈 할당
app.set('port', process.env.PORT || 3000); // express 포트 설정

app.get('/', (req, res) => {
    // res.send('hello express');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => { // 해당 포트로 서버 실행
    console.log(app.get('port'), ' port wait...');
});