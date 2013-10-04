define(['Book', 'BookView', 'LibraryView'], function(Book, BookView, LibraryView) {

	var Library = Backbone.Collection.extend({
		model: Book,
		localStorage: new Backbone.LocalStorage("LibraryLS")
	});

	return Library;
});