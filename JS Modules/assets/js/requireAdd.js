// define("add", ['assets/js/require.print'], function(require.print){
define(['../js/requirePrint'], function(requirePrint){
	console.log('require add');
	return {
		add : function () {
			var _sum = 0;
			for (var i in arguments){
				_sum += arguments[i];
			}
			console.log(requirePrint.display(_sum));
			return _sum;
		}
	}
} ) 