// 3.5 searchParams 를 사용하면 유용하다

const { URL } = require('url');

const myUrl = new URL("https://developer.mozilla.org/ko/search?q=url&page=2");


console.log(myUrl.searchParams);
// URLSearchParams { 'q' => 'url', 'page' => '2' }
console.log(myUrl.searchParams.getAll('q'));
// [ 'url' ]
console.log(myUrl.searchParams.get('page'));
// 2
console.log(myUrl.searchParams.has('page'));
// true
console.log(myUrl.searchParams.keys());
// URLSearchParams Iterator { 'q', 'page' }
console.log(myUrl.searchParams.values());
// URLSearchParams Iterator { 'url', '2' }

myUrl.searchParams.append('q', 'web');
console.log(myUrl.searchParams.getAll('q'));
// [ 'url', 'web' ]

myUrl.searchParams.set('q', 'web');
console.log(myUrl.searchParams.getAll('q'));
// [ 'web' ]

myUrl.searchParams.delete('q');
console.log(myUrl.searchParams.getAll('q'));
// []

console.log(myUrl.searchParams.toString())
myUrl.search = myUrl.searchParams.toString();