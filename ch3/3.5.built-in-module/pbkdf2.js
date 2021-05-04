const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => { // 64바이트 랜덤 문자열 생성
    const salt = buf.toString('base64');
    console.log('salt ', salt);

    crypto.pbkdf2('비밀번호', salt, 100000, 54, 'sha512', (err, key) => {
        console.log('password ', key.toString('base64'));
    })
})