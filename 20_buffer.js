//buffer는 파일을 다룰 떄 자주 사용하는 객체 !! 문자열이나 data들을 byte단위로 넣었다 뺏다 가능하다 인코딩에따라 byte 길이에 차이가 있을 수 있음

var output = `안녕!`;
var buffer1 = new Buffer(10); //길이가 10인 buffer 객체 생성
var len = buffer1.write(output, `utf8`); //buffer 안에 글자 담기, 인코딩  /// return 으로 length가 나옴
console.log(`버퍼에 쓰여진 문자열 길이 : ${len}`);
console.log(`첫번째 버퍼에 쓰인 문자열  : ${buffer1.toString()}`);


console.log(`버퍼 객체인지 여부 : ${Buffer.isBuffer(buffer1)}`);

var byteLen = Buffer.byteLength(buffer1);
console.log(`byteLen : ${byteLen}`); //10 출력->  위에서 buffer 객체를 10으로 만들었음

var str1 = buffer1.toString(`utf8`, 0, 5); // 0부터 6 바이트? 5하면 안?뜨고 6하면 안녕 
console.log(`str1 : ${str1}`);