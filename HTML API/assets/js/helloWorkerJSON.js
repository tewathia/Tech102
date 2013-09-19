// jsonObj = {
// 	a:1,
// 	b:2,
// 	c:3,
// 	d:null,
// 	e:"ka"
// }

// // var JSONFile = JSON.parse(jsonObj);

// postMessage(jsonObj);

function messageHandler(event){

	// to access the message sent by the main page
	var messageSent = event.data;
	switch(messageSent.cmd){
		case 'init':
		break;
		case 'hello':
		var messageReturned = " Hello " + messageSent.param + " from the other thread.!";
		var i;
		for(i=0; i<=1000000;i++) {
			messageReturned += i + " ";
		}
		this.postMessage(messageReturned);
		break;
	}
}

// this.onmessage = messageHandler;

this.addEventListener("message", messageHandler, false);
// self.addEventListener("message", messageHandler, false);
// alert(this); -> doesn't work
