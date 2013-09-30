	require.config({
		baseUrl: "assets/js/"
	});

	require(['book', 'requireAdd'], function(book, requireAdd) {
		console.log(book);
		console.log(requireAdd);
	});