var http = require('http');
var Teacher = require('./module/Teacher');
var ReadFile = require('./module/readFile');
var WriteFile = require('./module/WriteFile');

http.createServer(function(req, res){

	res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});

	if (req.url != '/favicon.ico') {
		// Teacher = new Teacher(1, 'sunriseos', 20);
		// Teacher.enter();
		// Teacher.teach(res);
		// res.end();

		// 同步读取文件
		// var data = ReadFile.readfileSync('./module/one.html');
		// console.log(data);
		// res.write(data);

		//异步读取文件
		// ReadFile.redadfile('./module/one.html', function(data){
		// 	res.write(data);
		// 	res.end();
		// });

		var data = 'hello word';
		// 同步写入文件
		// WriteFile.writefileSync('./module/write.html', data);
		// res.end();
		//异步写入
		// WriteFile.writefile('./module/write.html', data, function(){

		// });


		ReadFile.redadfile('./module/write.html', function(data){
			res.write(data);
			var addData = 'hello word';
			WriteFile.writefile('./module/write.html', data+addData, function(){

			});
			res.end();
		});

		
		
		
	}

}).listen(8088);

console.log('服务已经启动');
