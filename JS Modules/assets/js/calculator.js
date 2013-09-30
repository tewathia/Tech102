define([], function () {

	return (function(){
		var _basic = 0
		, _hra = 0
		, _da = 0
		, _tax = 0
		, _salary = 0
		, _onSalaryChangeSubscribers = new Array();
		function getNet(){
			return _basic + _hra + _da;
		}
		return {
			basic : function(){
				if (arguments.length == 0) return _basic;
				_basic = arguments[0];
			},
			hra : function(){
				if (arguments.length == 0) return _hra;
				_hra = arguments[0];
			},
			da : function(){
				if (arguments.length == 0) return _da;
				_da = arguments[0];
			},
			tax : function(){
				if (arguments.length == 0) return _tax;
				_tax = arguments[0];
			},
			salChangeSubscriber : function(newSubs){
				_onSalaryChangeSubscribers.push(newSubs);
			},
			onSalaryChange : function(){
				for (var i in _onSalaryChangeSubscribers){
					_onSalaryChangeSubscribers[i](_salary);
				}
			},
			calculate : function(){
				_salary =  getNet() * ((100 - _tax)/100);
				this.onSalaryChange(_salary);
			},
			salaryValue : function(){
				return _salary;
			}
		}
	}());
})