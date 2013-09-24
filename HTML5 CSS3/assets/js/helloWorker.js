var _output = $('#output');

function WorkerMessage(cmd, param){
	this.cmd = cmd;
	this.param = param;

}

if(Modernizr.webworkers){
	var _btnSubmit = $('#showMessage'),
		_inputForWorker = $('#inputForWorker'),
		_killWorker = $('#stopWorker');

	var myWorkerObject = new Worker('assets/js/helloWorkerJSON.js');

	myWorkerObject.postMessage(new WorkerMessage('init', null));


	myWorkerObject.addEventListener('message', function (event) {
		// _output.text('');
		_output.text(_output.text()+event.data);
		console.log('1');
	});

	function onShowMessage(){
		myWorkerObject.postMessage(new WorkerMessage('hello', _inputForWorker.val()));
	}

	function onKillMessage(){
		myWorkerObject.terminate();
		console.log('2');
		alert('Worker has been stopped!');
	}

	_btnSubmit.on("click", onShowMessage);
	_killWorker.on("click", onKillMessage);

}
else{
	_output.text(_output.text()+'web workers not supported!');
}