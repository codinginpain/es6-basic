var fs = require(`fs`);

var infile = fs.createReadStream(`./output.txt`, {flags:`r`}); //읽기 권한 r

infile.on(`data`, function(data) { //on `data` 함수 
    console.log(`읽어들인 데이터 : ${data}`);
});

infile.on(`end`, function() { // on `end` 함수
    console.log(`읽기 종료`);
})