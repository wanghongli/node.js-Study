var http=require('http');
var url=require('url');
var Router=require('./module/Router');

http.createServer(function(req, res){

	res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
	if (req.url != '/favicon.ico') {
		var pathName = url.parse(req.url).pathname;
		// console.log(pathName);
		// 全局的替换
		// pathName = pathName.replace(/\/+/g, '');

		pathName = pathName.replace(/\//, '');
		Router[pathName](req, res);
		res.end();

						
	}
	

}).listen(8088);

console.log('服务已经启动');


