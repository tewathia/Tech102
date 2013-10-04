define(['jquery', 'underscore', 'backbone','Book', 'BookView', 'Library'], function($, _, Backbone, Book, BookView, Library){

  var LibraryView = Backbone.View.extend({
    formTempId : '#formTemp',
    initialize: function() {
      this.listenTo(this.collection, 'all', this.render);

    },
    events: {
      "click #addBook" : "onAddBook"
    },
    render: function() {
      console.log('!libView render called!');
      var $content = $('<table>');
      for (var i in this.collection.models){
        var myModel = new BookView({model: this.collection.models[i]});
        $content.append(myModel.render().$el);
      }
      this.$el.html($(this.formTempId).html()).append($content);
      return this;
    },
    onAddBook : function() {
      console.log('!book added!');
      var newTitle = this.$el.find('#titleInput');
      var newUnits = this.$el.find('#unitsInput');
      this.collection.create({title: newTitle.val(), units: newUnits.val()}).save();
    }

  });



  return LibraryView;



});