/**
 * buffer : 파일을 읽을 때 파일데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있게 하는데 이 때의 데이터 
 * from : 문자열 -> 버퍼로 변환
 * toString
 * concat 
 * alloc : 빈버퍼 생성
 * readFile 방식의 버퍼를 사용하면 메모리 성능 이슈가 발생할 수 있음
 */
const buffer = Buffer.from('버퍼로 바꿔 보세요'); //  문자열 -> 버퍼로 변환
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array); // 배열안에 든 버퍼 합침
console.log('concat : ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc : ', buffer3);