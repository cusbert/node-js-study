// 3.5 
// url.parse(주소): 주소를 분해
// url.format(객체): 객체를 다시 주소로

const url = require('url');
//import { URL } from url;

const myUrl = new URL("https://developer.mozilla.org/ko/search?q=url&page=2");

console.log('new url', myUrl);
console.log('url.format()', url.format(myUrl));
// https://developer.mozilla.org/ko/search?q=url&page=2

console.log("---------");
const parseUrl = url.parse("https://developer.mozilla.org/ko/search?q=url&page=2");
console.log("parseUrl", parseUrl);
console.log('url.format()', url.format(parseUrl));

/*
parseUrl Url {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'developer.mozilla.org',
    port: null,
    hostname: 'developer.mozilla.org',
    hash: null,
    search: '?q=url&page=2',
    query: 'q=url&page=2',
    pathname: '/ko/search',
    path: '/ko/search?q=url&page=2',
    href: 'https://developer.mozilla.org/ko/search?q=url&page=2'
  }
*/