var eventBus = (function (){
	// var _eventList = [];
	var _eventList = {};

	function subDef(eventID, callback){
		// _eventList.push({on: eventID, callback: callback});
		if(!_eventList[eventID]){
			_eventList[eventID] = new Array();
		}
		_eventList[eventID].push(callback);
		return this;
	}

	function pubDef(eventID, product){
		// for (var i in _eventList){
		// 	if (_eventList[i].on == eventID){
		// 		_eventList[i].callback(product);
		// 	}
		// }
		if(_eventList[eventID]){
			setTimeout(function(){
				for (var i in _eventList[eventID]){
					_eventList[eventID][i](product);
				}
			}, 1);
		}
		return this;
		
	}

	return {
		subscribe : subDef,
		publish : pubDef
	}
}());

function ProductList(){
	var _prodList = [];
	this.add = function(prodId){
		_prodList.push(prodId);
		eventBus.publish("/prodAdd", prodId);
		console.log('publishing done!')
	}
	this.remove = function(prodId){
		for (var i in _prodList){
			if (_prodList[i] == prodId){
				_prodList.splice(i, 1);
				eventBus.publish("/prodRem", prodId);
				console.log('publishing done!')
			}
			else{
				throw new Error(prodId + ' does not exist');
			}
		}
	}
}

var o1 = {
	onAddProd : function(product){
		console.log('Product - ' + product + ' added at ' + new Date());
	},
	onRemProd : function(product){
		console.log('Product - ' + product + ' removed');
	}
}


var o2 = {
	onAddProd : function(product){
		console.log('Product - ' + product + ' added. Object 2');
	},
	onRemProd : function(product){
		console.log('Product - ' + product + ' removed. Object 2');
	}
}

var o3 = {
	onAddProd : function(product){
		for(var i = 0; i < 1000000; i++){
			for (var j = 0; j<10000; j++){
			}
		}
		console.log('o3 done'); 
	},
	onRemProd : function(product){
		for(var i = 0; i < 1000000; i++){
			for (var j = 0; j<10000; j++){
			}
		} 
	}
}


var pL = new ProductList();


eventBus.subscribe("/prodAdd", o1.onAddProd).subscribe("/prodAdd", o2.onAddProd).subscribe("/prodAdd", o3.onAddProd);


/*eventBus - a bus where events are published and subscribed.

o1 = {}

eventBus.subscribe("/productAdded",o1.onProductAdded);
eventBus.subscribe("/productRemoved",o1.onProductRemoved);

productList
============

-add(product)
  eventBus.publish("/productAdded",product);

-remove(product)
  eventBus.publish("/productRemoved",product);


  // o1 doesn't know abt productList and productList doesn't know abt o1, but both know about eventBus*/
