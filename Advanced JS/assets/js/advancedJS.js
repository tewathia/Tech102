var product = {id:100, name:'Pen', cost:1000};

product["cost"] = 210;

Object {id: 100, name: "Pen", cost: 210, Cost: 210}

for (var i in product){
	console.log(product[i]);
}


// Constructor Function

function Product(ID, NAME, COST){
	this.id = ID;
	this.name = NAME;
	this.cost = COST;
	this.costIDfn = costIDTemplate;
}

var constructedProduct = new Product(2, 'tablet', 44990);


// Factory Function
function createProductFunction(ID, NAME, COST){
	return {id:ID, name:NAME, cost:COST, costIDfn:costIDTemplate};
}

var factoryFunctionCreatedProduct = createProductFunction(1, 'phone', 29990);


// checking if the constructor was called with new or not
function Product(ID, NAME, COST){
	if (this == window){
		return new Product(ID, NAME, COST);	
	}
	else{
		this.id = ID;
		this.name = NAME;
		this.cost = COST;
	}

}



var notNewProduct = Product(2, 'tablet', 44990);

function Product(ID, NAME, COST){
	if (this.constructor.name != arguments.callee.name){
		return new Product(ID, NAME, COST);	
	}
	else{
		this.id = ID;
		this.name = NAME;
		this.cost = COST;
	}

}

var notNewProduct = Product(2, 'tablet', 44990);

function Product(ID, NAME, COST){
	console.dir(arguments);
	if (this.constructor.name != arguments.callee.name){
		console.log(this.constructor.name, arguments.callee.name);
		return new Product(ID, NAME, COST);	
	}
	else{
		this.id = ID;
		this.name = NAME;
		this.getCost = function(){
			return _COST;
		}
		this.setCost = function(costInput){
			if (costInput < 0){
				throw new Error("Invalid Cost");
			}
			else
				_COST = costInput;	
		}
		var _COST;
		this.setCost(COST);
		// var _COST = this.setCost(COST);
		this.whoAreYou = costIDTemplate;
	}

}

var notNewProduct = Product(2, 'tablet', -44990);

function Product(ID, NAME, COST){
	if (this.constructor.name != arguments.callee.name){
		return new Product(ID, NAME, COST);	
	}
	else{
		this.id = ID;
		this.name = NAME;
		this.cost = function(costInput){
			if (typeof(costInput)=="undefined"){
				return _COST;
			}
			else{
				if (costInput < 0){
					throw new Error("Invalid Cost");
				}
				else{
					_COST = costInput;	
				}
			}
		}
		this.cost(COST);
		var _COST;
		// var _COST = this.setCost(COST);
		this.whoAreYou = costIDTemplate;
	}

}

var notNewProduct = Product(2, 'tablet', 44990);

getset