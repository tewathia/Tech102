define([], function() {
	console.log('require print');
	return {
		display: function (msg) {
			console.log('Message is ' + msg);
		}
	}
});