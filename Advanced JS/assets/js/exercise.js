function Order(){
	var ProductList = new Array();
	var _onAdd = new Function;
	this.addProduct = function(ProductInput){
			// if (ProductInput instanceof Product){
			// 	realProduct = Product;
			// }
			// else if (ProductInput instanceof Object){
			// 	realProduct = new Product(ProductInput.id, ProductInput.name, ProductInput.cost, ProductInput.units);
			// }
			// else{
			// 	console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
			// 	realProduct = new Product(arguments[0], arguments[1], arguments[2], arguments[3]);
			// }
			console.log('constructor name is '+ ProductInput.constructor.name);
			if (ProductInput.constructor.name == "Product"){
				realProduct = ProductInput;
			}
			else if (ProductInput.constructor.name == "Object"){
				realProduct = new Product(ProductInput.id, ProductInput.name, ProductInput.cost, ProductInput.units);
			}
			else{
				console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
				realProduct = new Product(arguments[0], arguments[1], arguments[2], arguments[3]);
			}



			ProductList.push(realProduct);
			_onAdd = this.onProductAdd();
			_onAdd(realProduct);
		}

		this.value = function(){
			var valueSum = 0;
			for (var i in ProductList){
				currentProd = ProductList[i];
				console.log(currentProd.units(), currentProd.cost(), currentProd.units()*currentProd.cost());
				valueSum += currentProd.units()*currentProd.cost();
			}
			this.list = ProductList;
			return valueSum;
		}

		this.onProductAdd = function(){
				if (arguments.length==0) return _onAdd;
				else
					_onAdd = arguments[0];
			}
	}

	function Product(ID, NAME, COST, UNITS){
	console.log(arguments);
		if (this.constructor.name != arguments.callee.name){
			return new Product.apply(arguments);	
		}
		else{
			this.id = ID;
			this.name = NAME;
			this.cost = function(costInput){
				if (typeof(costInput)=="undefined"){
					return _cost;
				}
				else{
					if (costInput < 0){
						throw new Error("Invalid Cost");
					}
					else{
						_cost = costInput;	
					}
				}
			}
			this.cost(COST);
			_units = UNITS;
			this.units = function(){
				if (arguments.length==0) return _units;
				else
					return _units[0];
			}
			var _cost;
	}

}

// var notNewProduct = Product(2, 'tablet', 44990, 12);
var p1 = new Product(1, 'mobile', 11990, 11);
var p2 = new Product(2, 'tablet', 44990, 12);
var p3 = new Product(3, 'laptop', 84990, 16);

var myOrder = new Order();

function test(product){
	console.log(product, 'added');
}
myOrder.onProductAdd(test);

myOrder.addProduct(p1);
myOrder.addProduct(p2);
myOrder.addProduct(p3);
myOrder.addProduct({id: 210, name: "cellphone", cost:40000, units: 4});
myOrder.addProduct(110, 'lappy', 50000, 1);
myOrder.value();

function arrayToList(array){
	for (var i in array){
		 array[i]
	}
}
