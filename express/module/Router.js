var ReadFile = require('./readFile');
var url = require('url');
var querystring = require('querystring');

function setHeader(req, res){
	res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
	function callback(data){
		res.write(data);
		res.end();
	}
	return callback;
}

module.exports = {
	login: function login(req, res){
		// ------------------------------get方式接收
		// var params = url.parse(req.url, true).query;
		// if (params['email'] != undefined) {
		// 	console.log(params['email']);
		// 	console.log(params['pwd']);
		// }
		// ------------------------------post方式接收
		var postParams = '';
		req.on('data', function(data){
			postParams += data;
		});
		req.on('end', function(){
			postParams = querystring.parse(postParams);
			if(postParams['email'] != undefined){
				console.log('收到参数:'+ postParams['email'] + '\n');
				console.log('收到参数:'+ postParams['pwd'] + '\n');
			}
		});

		var callback = setHeader(req, res);
		ReadFile.redadfile('./views/login.html', callback);
	},

	register: function register(req, res){
		var callback = setHeader(req, res);
		ReadFile.redadfile('./views/register.html', callback);
	},

	showImg: function showImg(req, res){
		res.writeHeader(200,{'Content-Type':'image/jpeg'});
		ReadFile.readImg('./images/output.png', res);	

	}

}