// 3.3 모듈로 만들기
// require 함수 안에 불러올 모듈 경로 작성

const { odd, even } = require("./var");
// import { odd, even } from "./var.js";  // ES6 스타일로 변경

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;
// export default checkOddOrEven; // ES6 스타일로 변경