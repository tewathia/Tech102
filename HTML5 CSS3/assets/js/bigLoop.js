// var n = $('#num').val();
var n = 1000000,
	dispText = '';
for (var i = 0; i < n; i++){
	// $('#text').html($('#text').html()+'Iteration ' + (n-i) + '</br>' );
	// console.log(i);
	dispText += 'Iteration ' + (n-i) + '</br>';
}
// console.log(dispText+'in work');
postMessage(dispText);