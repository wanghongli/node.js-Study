var http = require('http');
var url = require('url');
var Router = require('./module/Router');


http.createServer(function(req, res){

	

	if (req.url != '/favicon.ico') {
		var pathName = url.parse(req.url).pathname;
		pathName = pathName.replace(/\//, '');
		console.log(pathName);
		Router[pathName](req, res);
		
		
	}

}).listen(8088);

console.log('服务已经启动');
