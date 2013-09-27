// function ClickCounter(){
// 	var _count = 0;
// 	this.click = function(){
// 		_count += 1;
// 	}

// 	this.count = function(){
// 		return _count;
// 	}
// }


// function ClickCounter(){
// 	// var _instances;
// 	this.getInstances = function(){
// 		if (typeof(_instances) == "undefined"){
// 			var _instances = 1;
// 			return true;
// 		}
// 		else {
// 			return false;
// 		}

// 	}
// 	var _instCheck = this.getInstances();
// 	if (_instCheck){
// 		var _count;

// 		this.click = function(){
// 			_count += 1;
// 		}

// 		this.count = function(){
// 			return _count;
// 		}
// 	}
// 	else {
// 		throw new Error('cannot be created');
// 	}
// }

// function ClickCounter(){
// 	// var _instances;
// 	this.getInstances = function(){
// 		if (typeof(_instances) == "undefined"){
// 			var _instances = 1;
// 			var _count;

// 			this.click = function(){
// 				_count += 1;
// 			}

// 			this.count = function(){
// 				return _count;
// 			}

// 		}
// 		else {
// 			throw new Error('cannot be created');

// 		}

// 	}
// 	this.getInstances();
// }



// function ClickCounter(){
// 	var instance = (new function(){
// 		var _count = 0;
// 		this.click = function() { _count++;}
// 		this.count = function() { return _count;}
// 	}());
// 	ClickCounter = function(){
// 		return instance;
// 	}
// 	return instance;
// }



// var c1 = new ClickCounter();
// var c2 = new ClickCounter();

// c1.click();
// c1.click();
// c1.click();
// c1.click();
// c1.click();
// c1.click();

// console.log('c1 count is ', c1.count());
// console.log('c2 count is ', c2.count());

function ClickCounter(){
	var _count = 0;
	var instance = {
		click : function() { 
			_count++;
		},
		count : function() { 
			return _count;
		}
	};
	ClickCounter = function(){
		return instance;
	}
	return instance;
}


var c1 = new ClickCounter();
var c2 = new ClickCounter();

c1.click();
c1.click();
c1.click();
c1.click();
c1.click();
c1.click();

console.log('c1 count is ', c1.count());
console.log('c2 count is ', c2.count());


