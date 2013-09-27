var calculator = (function(){
	var _basic = 0
	, _hra = 0
	, _da = 0
	, _tax= 0;
	function getNet(){
		return _basic + _hra + _da;
	}
	return {
		basic : function(){
			if(arguments.length ==0) return _basic;
			_basic = arguments[0];
		},
		hra : function(){
			if(arguments.length ==0) return _hra;
			_hra = arguments[0];
		},
		da : function(){
			if(arguments.length ==0) return _da;
			_da = arguments[0];
		},
		tax : function(){
			if(arguments.length ==0) return _tax;
			_tax = arguments[0];
		},
		calculate : function(){
			return getNet() * ((100 - _tax)/100);
		}
	}
}())

// function SalaryCalculator(Basic, HRA, DA, Tax){
// 	this.basic = Basic;
// 	this.hra = HRA;
// 	this.da = DA;
// 	this.tax = Tax;
// 	var _getNet = function(b, h, d){
// 		return b+h+d;

// 	}
// 	this.calculate = function(){
// 		return _getNet(this.basic, this.hra, this.da)*(1-this.tax/100);
// 	}
// }

// function SalaryCalculator(Basic, HRA, DA, Tax){
// 	this.basic = Basic;
// 	this.hra = HRA;
// 	this.da = DA;
// 	this.tax = Tax;
// 	var _getNet = function(){
// 		return Basic+HRA+DA;

// 	}
// 	this.calculate = function(){
// 		return _getNet()*(1-Tax/100);
// 	}
// }

// var sc = new SalaryCalculator(20000, 2000, 1000, 30);
// sc.calculate();


function SalaryCalculator(Basic, HRA, DA, Tax){
	this.basic = Basic;
	this.hra = HRA;
	this.da = DA;
	this.tax = Tax;
	var _getNet = function(){
		return this.basic + this.hra + this.da;

	}
	this.calculate = function(){
		return _getNet.apply(this)*(1-this.tax/100);
	}
}




// console.log('a');

var calcView = {
	init: function(){
		$('#btnCalc').on("click", function(){
			var basic = parseInt($('#inputBasic').val()),
			hra = parseInt($('#inputHRA').val()),
			da = parseInt($('#inputDA').val()),
			tax = parseInt($('#inputTax').val());
			sc = new SalaryCalculator(basic, hra, da, tax);
			console.log('calculate clicked');
			$('#showSalary').text(sc.calculate());

		});

	},
	hide: function(){
		$('#calculatorBox').hide();
	},
	show: function(){
		$('#calculatorBox').show();
	}
}