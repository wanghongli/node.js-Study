var http=require('http');
var member = require('./member.js');
console.log(member);

http.createServer(function(req, res){

	res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
	if (req.url != '/favicon.ico') {
		console.log('访问');
		res.write("<h1> hello node.js </h1> ");
		fun1(res);
		member.getMemberInfo(res);
		member.logout(res);
		res.end('你好，世界');
						
	}
	

}).listen(8088);

console.log('服务已经启动');


function fun1(res){
	console.log('func1');
	res.write("this is fun1<br/>");

}
