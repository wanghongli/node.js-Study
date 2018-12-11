// var http=require('http');
// var url=require('url');


// http.createServer(function(req, res){

// 	res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
// 	if (req.url != '/favicon.ico') {
// 		// ---------------- 模拟接口返回 --------------------------------
// 		// var datas = {
// 		// 	'aa':'bb',
// 		// 	'lists': ['aa', 'bb', 'cc']
// 		// };
// 		// 返回数据
// 		// res.write(JSON.stringify(datas));
// 		// res.write(datas);   // 这里报错 第一个参数必须是字符串 不能传object
// 		// -------------------------------------------------------------

// 		res.end();

						
// 	}
	

// }).listen(8088);

// console.log('服务已经启动');
var fs = require('fs');

module.exports={
	readfileSync: function(path){
		var data = fs.readFileSync(path, 'utf-8');
		console.log('同步方法执行完毕');
		return data;
	},

	redadfile: function(path, callback){
		fs.readFile(path, function(err, data){
			if (err) {callback('文件不存在');}
			else{
				// console.log(data.toString());
				callback(data.toString());
			}
		});
	},
	readImg: function(path, res){
		fs.readFile(path, 'binary', function(err, fileData){
			if (err) {console.log(err);}
			else{
				res.write(fileData, 'binary');
				res.end();
			}
		});
	}
}


