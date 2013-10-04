define(['jquery', 'underscore', 'backbone', 'backboneLocalstorage', 'Book', 'BookView', 'LibraryView'], function($, _, Backbone, Store, Book, BookView, LibraryView) {

	var Library = Backbone.Collection.extend({
		model: Book,
		localStorage: new Store("LibraryLS")
	});

	return Library;
});