// crypto : 암호화 모듈
/** 
 *  
 * 단방향 암호화 : 해시 기법, 입력 문자열을 고정된 길이의 문자열로 변경할 때 주로 사용, 복호화 불가능
 * 양방향 암호화 : 암호화된 문자열을 복호화 가능, 키
 */ 

/**
 * createHash(알고리즘) : md5, sha256, sha512 등
 * update(변환할 문자)
 * digest(인코딩) : base64, hex, latin1
 */

const crypto = require('crypto');

console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64', crypto.createHash('sha512').update('비밀번호22').digest('hex'));