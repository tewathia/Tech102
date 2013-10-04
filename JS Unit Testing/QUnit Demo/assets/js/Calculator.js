function Calculator () {

}
Calculator.prototype.add = function () {
	var _sum = 0;

	function innerAdd(toBeParsed) {

		if (toBeParsed instanceof Array){
			var _innersum = 0;
			for (var i in toBeParsed) {
				_innersum += innerAdd(toBeParsed[i]);
			}
			return _innersum;
		}
		else if (typeof toBeParsed == "function"){
			return innerAdd(toBeParsed());
		}
		else if (typeof toBeParsed == "string"){
			if (eval(toBeParsed) instanceof Array){
				return innerAdd(eval(toBeParsed));
			}
			else {
				
				return parseInt(toBeParsed);
			}
		}
		else {
			return toBeParsed;
		}

	}
	for (var i in arguments){
		_sum+= innerAdd(arguments[i]);
	}

	this.result =  _sum;
}