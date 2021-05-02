// 3.3 모듈로 만들기
// require 함수 안에 불러올 모듈 경로 작성
const { odd, even } = require("./var.js");
const checkOddOrEven = require("./func.js");

function checkStringOddOrEven(str) {
    if(str.length  % 2) {
        return odd;
    } 
    return even;
}

console.log("checkOddOrEven", checkOddOrEven(10));
console.log("checkStringOddOrEven", checkStringOddOrEven("hello"));