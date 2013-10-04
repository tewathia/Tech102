define([], function () {


	var BookView = Backbone.View.extend({
		tagName: 'tr',
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},
		events: {
			"click #btnRem" : "onRemove"
		},
		render: function() {
			console.log('!bookview render called!');

			this.$el.html($('<td>' + this.model.get('title') + '</td><td>' + this.model.get('units') + '</td><td><input type="button" id="btnRem" value="Remove"></input></td>'));

			return this;
		},
		onRemove : function() {
			this.model.destroy();
			console.log('!deleted!');
			this.render();
			this.remove(); 
		}
	});

	return BookView;
});