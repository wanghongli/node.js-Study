var http = require('http');
var Teacher = require('./module/Teacher');
var ReadFile = require('./module/readFile');

http.createServer(function(req, res){

	res.writeHeader(200,{'Content-Type':'image/jpeg'});

	if (req.url != '/favicon.ico') {
		// 不能再res里面写字符串  否则就报错了
		ReadFile.readImg('./images/output.png', res);
		
	}

}).listen(8088);

console.log('服务已经启动');
