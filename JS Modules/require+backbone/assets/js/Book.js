define([], function () {
	var Book = Backbone.Model.extend({
		url: 'booksURL',
		initialize: function () {
			console.log('!book model initialized!');
		},
		defaults: {
			title: 'no title yet',
			units: 10
		}
	});

	return Book;
});