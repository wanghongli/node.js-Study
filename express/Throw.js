var http = require('http');
var url = require('url');
var Router = require('./module/Router');
var ReadFile = require('./module/readFile')


http.createServer(function(req, res){
	res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
	if (req.url != '/favicon.ico') {
		var pathName = url.parse(req.url).pathname;
		pathName = pathName.replace(/\//, '');
		//  同步的捕获
		try{
			// Router[pathName](req, res);
			ReadFile.redadfile('./view/aa.html', function(data){
				res.write(data);
				res.end();
			});	
		} catch(err){
			console.log(err.toString());
			res.write(err.toString());
			res.end();
		}
		
	}

}).listen(8088);

console.log('服务已经启动');
