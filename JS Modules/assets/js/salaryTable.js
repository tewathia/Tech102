define(['calculator'], function(calculator){


return (function(calculator){

function addRow () {
	newRow = $('<tr>');
	$('<td>').text(calculator.basic()).appendTo(newRow);
	$('<td>').text(calculator.hra()).appendTo(newRow);
	$('<td>').text(calculator.da()).appendTo(newRow);
	$('<td>').text(calculator.tax()).appendTo(newRow);
	$('<td>').text(calculator.salaryValue()).appendTo(newRow);
	newRow.appendTo($('#resultTable'))
}

function subToSalChange(){
calculator.salChangeSubscriber(addRow);
}

return {
	addRow : addRow,
	subscribe : subToSalChange
};

}(calculator));


});
