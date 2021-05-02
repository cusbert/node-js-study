// 3.5
// querystring.parse(쿼리) : 쿼리부분을 자바스크립트 객체로 분해
// querystring.stringfy(객체) : query 객체를 다시 문자열로 조립

const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse("https://developer.mozilla.org/ko/search?q=url&locale=ko&locale=en-US&page=2");

const query = querystring.parse(parseUrl.query);
console.log(query);
console.log(querystring.stringify(query));