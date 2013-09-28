$('#btnDoWork').on("click", onBtnDoWorkClick);

function onBtnDoWorkClick() {
	displayDivMessage('Work Started.');
	setTimeout(function(){
		DoWork(function(){
			displayDivMessage("Work Completed");	
		}, function(countVal){
			$('progress#progressBar').val(countVal);
		});
	},10);
}

function DoWork(onCompleteCallback, onProgressCallBack){
	var count = 0;
	var handle = setInterval(bigLoop, 1);

	function bigLoop(){
		if(count == 1000){
			onCompleteCallback();
			clearInterval(handle);
		}
		else {
			console.log(count);
			count=count+1;
			onProgressCallBack(count);
			if(count%3 == 0){
				$('<span>').appendTo($('#progress'));
			}
			smallLoop();
		}
	}
}

function displayDivMessage(msg){
	$('#divMessage').html($('#divMessage').html()+msg+'</br>');
}

function smallLoop (){
	for (var j = 0; j < 1000; j++){
		for (var k = 0; k < 100; k++){
			}
		}
	}