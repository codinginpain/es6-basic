var http = require(`http`);

var server = http.createServer();

var host = `192.168.1.115`;
var port = 3000;
server.listen(port, host, 50000, function() {
    console.log(`웹 서버 실행.`);
});