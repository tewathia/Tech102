require.config({
	baseUrl: "assets/js",
	paths: {
		jquery:'../lib/jquery-1.10.1.min'
	}

});
require(['calculatorView', 'salaryTable', 'jquery'], function(calculatorView, salaryTable, jquery){
	$ = jquery;
	console.log(calculatorView);
	calculatorView.init();
	console.log(salaryTable);
	$(function(){
		salaryTable.addRow();
		salaryTable.subscribe();
	});
});

