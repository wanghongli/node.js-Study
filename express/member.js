// function getMemberInfo(res){
// 	console.log("我是fun2");
// 	res.write('这个memberinfo的function');
// }

// module.exports = getMemberInfo;	// 只支持一个函数


// ---------------------------------------------------------------------------


module.exports = {
	logout: function logout(res){
		console.log("我是loginout");
		res.write('这个memberinfo的logout方法<br />');
	},

	getMemberInfo: function getMemberInfo(res){
		console.log("我是fun2");
		res.write('这个memberinfo的function<br />');
	}


}	