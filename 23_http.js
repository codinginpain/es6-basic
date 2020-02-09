var http = require(`http`);

var server = http.createServer();

var host = `192.168.1.115`;
var port = 3000;
server.listen(port, host, `50000`, function() {  //대기 - 포트번호, hostIP, backlog(동접자), 콜백
    console.log(`웹 서버가 실행 되었습니다 ${host} : ${port}`);
});


