var fs = require(`fs`);

fs.readFile(`./package.json`, `utf8`, function(err, data) { //비동기 방식 콜백함수로 쪽으로 데이터를 던져줌 비동기 방식이라 밑에 명령이 먼저 실행 될 수 있음(동기방식 16번 파일 참조)
    console.log(data);
});