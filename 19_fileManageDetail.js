var fs = require(`fs`);

//w 하면 읽고 쓰는 모든 권한
fs.open(`./output.txt`, `w`, function(err, fd) { //비동기이지만 콜백안에서 계쏙해서 콜백으로 연속적으로 이벤트가 발생하게 됨 fd -> written -> close
    if(err) {
        console.log(`파일 오픈 error 발생`);
        console.dir(err);
        return;
    }

    var buf = new Buffer(`안녕!\n`); //buf라는 변수에 문자열을 담음 //buffer -> 문자열을 담는 객체 20번째 파일 참조
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) { //fd(description?), buf, 시작인덱스, 끝 인덱스, null?, callback
        if(err) {
            console.log(`파일 쓰기시 error 발생`);
            console.dir(err);
            return;
        }
        
        console.log(`파일 쓰기 완료함.`);

        fs.close(fd, function() { //파일 닫기
            console.log(`파일 닫기 완료.`);
        }); 

    });
}); 