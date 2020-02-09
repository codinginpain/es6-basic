var http = require(`http`);

var server = http.createServer();

var host = `192.168.1.115`;
var port = 3000;
server.listen(port, host, 50000, function() {
    console.log(`웹 서버 실행.`);
});

server.on(`connection`, function(socket) {
    console.log(`클라이언트가 접속 했습니다.`);
});

server.on(`request`, function(req, res) {
    console.log(`클라이언트 요청이 들어왔습니다`);
    // console.dir(req);

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"}); //200은 성공
    res.write(`<h1>웹 서버로부터 받은 응답</h1>`); //응답으로 보낼 것
    res.end(); //전송
});

