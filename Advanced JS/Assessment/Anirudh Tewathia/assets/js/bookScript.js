function Book(ID, TITLE, CATEGORY, UNITCOST, UNITS){
	
	// these are the private variables that will be visible only to the methods of this Constructor
	var _id = ID
	,_title = TITLE
	,_category = CATEGORY
	,_unitCost = UNITCOST
	,_units = UNITS
	,_bookValue = 0
	,_subscribers = {};

	// this function is triggered when any of the five characteristics of the book instance(viz. Id, Title, category, unitcost or unit) is modified
	function triggerEvent () {
		for (var i in _subscribers) {
			_subscribers[i]();
		}
	}


	// accessor methods are defined here for id, title, category, unitcost and unit. These act as both getters and setters based on the presence or absence of arguments when they are called
	this.id = function () {
		var argsId = arguments;			
		if (argsId.length > 0) {
			_id = argsId[0];
			triggerEvent();
		}
		return _id;
	};

	this.title = function () {
		var argsTitle = arguments;			
		if (argsTitle.length > 0) {
			_title = argsTitle[0];
			triggerEvent();
		}
		return _title;
	};

	this.category = function () {
		var argsCategory = arguments;			
		if (argsCategory.length > 0 ) {

			// checks if the input value is of type number. If not, throws an error back to the user.
			if (typeof argsCategory[0] == "number"){

				_category = argsCategory[0];
				triggerEvent();
			}
			else {
				throw new Error('category entered is not a number');
			}
		}

		return _category;
	};

	this.unitCost = function () {
		var argsUnitCost = arguments;			
		if (argsUnitCost.length > 0 ) {
			// checks if the input value is of type number. If not, throws an error back to the user.

			if (typeof argsUnitCost[0] == "number"){
				_unitCost = argsUnitCost[0];
				triggerEvent();
			}
			else {
				throw new Error('Unit Cost entered is not a number');
			}
		}

		return _unitCost;
	};

	this.units = function () {
		var argsUnits = arguments;			
		if (argsUnits.length > 0) {
			_units = argsUnits[0];
			triggerEvent();
		}
		return _units;
	};

	// definition of accessor methods ends here

	// this function is used to calculate the bookvalue for the given Book instance. It is also automatically called when someone calls the bookValue method, to provide the latest book value to the user
	this.calculate = function () {
		_bookValue = _units*_unitCost;
		// this only calculates the bookvalue. It does not return it, as per the specifications
	}


	// this returns the value of the book after calling the calculate method to get the latest bookValue value
	this.bookValue = function () {
		this.calculate();
		return _bookValue;
	}


	// the list of events to be triggered when a value is changed is managed by these two methods -addOnChange and removeOnChange
	this.addOnChange = function (addCallback) {

		if (typeof addCallback == "function"){
			if (!_subscribers[addCallback.name]){

				_subscribers[addCallback.name] = addCallback;
			}
			else {
				throw new Error(addCallback.name + " is already subscribed.");
			}

		}

		else {
			throw new Error("invalid callback function!!");
		}
	}

	this.removeOnChange = function (removeCallback) {

		if (_subscribers[removeCallback.name]){

			delete _subscribers[removeCallback.name] 
		}
		else {
			throw new Error("No such subscription exists.");
		}


	}

	// this function merely lists all the subscribers to the onChange event
	this.getSubList = function (){
		console.log(_subscribers);
	}

}

// a new instance of Book is defined
var myBook = new Book(101, "JS Design Patterns", 7, 399, 14);



function change(){console.log('change subscription 1');};
function change2(){console.log('change subscription 2');}
myBook.addOnChange(change);
myBook.addOnChange(change2);


