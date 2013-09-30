var printObj = require(["node.print.js"]);

module.exports = {
	add : function () {
		var _sum = 0;
		for (var i in arguments){
			_sum += arguments[i];
		}
		console.log(printObj.print(_sum));
		return _sum;
	}
}