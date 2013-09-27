console.log('inherit');

var baseObject = {
	id:101,
	name:"tewathia"
};

function Employee (salary) {
	this.salary = salary;
}

Employee.prototype = baseObject;

var e1 = new Employee(19999);

console.dir(e1.__proto__.name);
console.log(e1);
console.log(e1.name);

baseObject.name = "anirudh";
console.dir(e1);
console.log(e1);
console.log(e1.name);

function copy(srcObj, destObj){
	for (var i in srcObj){
		destObj[i] = srcObj[i];
	}
}

var b ={};

var e2 = new Employee(10000);
copy(baseObject, e2);

var newBaseObject = {
	display: function(){
		console.log(this.id, this.name);
	}
};

function Student(id, name){
	this.id = id;
	this.name = name;
}

Student.prototype = newBaseObject;

var s1 = new Student(1001, "A");
var s2 = new Student(1002, "B");

s1.display();
s2.display();

