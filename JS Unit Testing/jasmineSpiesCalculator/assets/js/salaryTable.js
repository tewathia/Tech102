var salaryTable = (function(calculator){
console.log(calculator);
function addRow () {
	newRow = $('<tr>');
	$('<td>').text(calculator.basic()).appendTo(newRow);
	$('<td>').text(calculator.hra()).appendTo(newRow);
	$('<td>').text(calculator.da()).appendTo(newRow);
	$('<td>').text(calculator.tax()).appendTo(newRow);
	$('<td>').text(calculator.salary()).appendTo(newRow);
	newRow.appendTo($('#resultTable'))
}

function subToSalChange(){
calculator.subscribeSalaryChange(addRow);
}

return {
	addRow : addRow,
	subscribe : subToSalChange
};

}(Calculator));


$(function(){
	salaryTable.addRow();
	salaryTable.subscribe();
});