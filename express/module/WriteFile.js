var fs = require('fs');

module.exports={
	writefileSync: function(path, data){
		fs.writeFileSync(path, data);
	},

	writefile: function(path, data, callback){
		
		fs.writeFile(path, data, function(err){
			if (err) {console.log(err);}
			else{
				// console.log(data.toString());
				callback();
			}
		});
	}
}