// $(function () {
	"use strict";
	// var google = google;
    google.load('visualization', '1.0', {packages:['corechart']});
	google.setOnLoadCallback(drawMyCharts);
	console.log('gChart')




	function drawMyCharts(){
		console.log('drawMyCharts function');
		var dataPie = google.visualization.arrayToDataTable([
			['Pie', 'Share'],
			['Apple', 200],
			['KeyLime', 300],
			['Strawberry', 127],
			['Cherry', 280]
			]);

		var optionsPie = {
			'title':'pie shares',
			'width': 300,
			'height': 300
		};

		var pieChartObj = new google.visualization.PieChart($('pieChartDiv')[0]);
		pieChartObj.draw(dataPie, optionsPie);


	}	

// })