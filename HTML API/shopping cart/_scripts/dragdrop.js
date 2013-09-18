var theFaves = $('#faves');

$('.painting').bind('dragstart', function  (evt) {
	evt.dataTransfer.setData('text', this.id);
	$('h2').fadeIn('fast');
}).hover(
	function(){
		$('div', this).fadeIn();
		$('div', this).fadeOut();
	}
);

$('#favorites').bind('dragover', function(evt){
	$('#favorites').css('background-color','gray');
	evt.preventDefault();
}).bind('dragleave', function(evt){
	$('#favorites').css('background-color','white');
	evt.preventDefault();
}).bind('dragenter', function(evt){
	$('#favorites').css('background-color','yellow');
	evt.preventDefault();
}).bind('drop', function(evt){
	// here the data is accepted from dataTransfer.setData() function
	// var id = evt.dataTransfer.getData('text'),
	// 	item = $('#'+id),
	// 	favList = $('#faves'),
	// 	prevFavItem = null;
	// prevFavItem = $('<li/>', {
	// 	text: $('p:first', item).text(),
	// 	data: {id: id}
	// }).appendTo(favList);
	var id = evt.dataTransfer.getData('text'),
		item = $('#'+id),
		favList = $('#faves'),
		prevFavItem = null;
		if (item.css('opacity')==1){
	prevFavItem = $('<li/>', {
		text: $('p:first', item).text(),
		data: {id: id}
	}).appendTo(favList);}

	$('#favorites').css('background-color', '#A858A3');
	saveFaves();
	evt.stopPropagation();
	return false;

});

function saveFaves(){
	localStorage.setItem('favorites', theFaves.html());
}

loadFaves();

function loadFaves(){
	if(localStorage.getItem('favorites')){
		theFaves.html(localStorage.getItem('favorites'));
	}	l
}