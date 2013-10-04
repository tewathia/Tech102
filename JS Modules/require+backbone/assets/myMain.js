	require.config({
		baseUrl: "assets/js/"
	});

require(['Book', 'BookView', 'Library', 'LibraryView'], function(Book, BookView, Library, LibraryView) {
	

	function fetch() {
		console.log('!fetch!');
		myLibrary.fetch();
	}

	$('#fetch').on("click", fetch);
	var myLibrary = new Library();

	var myLibraryView = new LibraryView({collection: myLibrary});


	myLibraryView.render().$el.appendTo($('body'));

});