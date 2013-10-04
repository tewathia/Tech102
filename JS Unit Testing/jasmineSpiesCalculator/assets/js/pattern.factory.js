// function FullTimeEmployee(id, name){
// 	this.id = id;
// 	this.name = name;
// 	// this.type = "FullTimeEmployee";
// 	this.type = this.constructor.name;
// }

// function ContractEmployee(id, name){
// 	this.id = id;
// 	this.name = name;
// 	// this.type = "ContractEmployee";
// 	this.type = this.constructor.name;
// }

// function EmployeeFactory(){
// 	this.createEmp = function(id, name, type){
// 		if (type == "FullTimeEmployee"){
// 			return new FullTimeEmployee(id, name);
// 		}
// 		else if (type == "ContractEmployee"){
// 			return new ContractEmployee(id, name);
// 		}
// 		else {
// 			throw new Error('Wrong Employee Type');
// 		}
// 	}

// }

// var newFactory = new EmployeeFactory();

var empClasses = {

	fte : function(id, name){
		this.id = id;
		this.name = name;
		this.type = "FullTimeEmployee";
	},
	cte : function(id, name){
		this.id = id;
		this.name = name;
		this.type = "ContractEmployee";
	}
}

function EmployeeFactory(){
	this.createEmp = function(id, name, type){
		return new empClasses[type](id, name);

	}

}

var newFactory = new EmployeeFactory();