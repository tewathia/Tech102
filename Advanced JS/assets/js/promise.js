var def = $.ajax("pubsub.html");
console.dir(def);
def.done(function (data) {
	console.log(data);
}).done(function(){
	console.log('done done');
}).fail(function(){
	console.log('fail done');
}).always(function(data){
	console.log(data + 'ajax always done');
}).then(function(){
	console.log('ajax then done');
});
