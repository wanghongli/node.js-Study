function User(id, name, age){
	this.id = id;
	this.name = name;
	this.age = age;

	this.enter = function enter(){
		console.log( this.name + '走进教室<br />');
	}
}

module.exports = User;