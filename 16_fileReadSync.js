var fs = require(`fs`);

var data = fs.readFileSync(`./package.json`, `utf8`); // 동기방식 비동기방식 17번파일 참조
console.log(data);
console.log(1);