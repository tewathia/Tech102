$(function () {

	"use strict"

	// pointing to the messageshow box, messagesend inputbox and server connection
	var content = $('#content'),
	input = $('#input'),
	status = $('#status');

	// user's color assigned by the server
	var myColor = false;

	// user's name sent to the server
	var myName = false;

	// uses mozilla's in-built WebSocket if user is working on firefox
	window.WebSocket = window.WebSocket || window.MozWebSocket;

	// if WebSocket is not supported, show a notification and exit
	if(!window.WebSocket){
		// $("<p>", {text: "Your browser does not support the WebSocket functionality requireed for this chatroom application"}).appendTo(content);
		// content.text("Your browser does not support the WebSocket functionality requireed for this chatroom application");
		content.html("<p>", {text: "Your browser does not support the WebSocket functionality required for this chatroom application"});
		input.hide();
		$('span').hide();
		return;
	}

	// open connection
	// var connection = new WebSocket('ws:localhost:1337');
	var connection = new WebSocket('ws://10.203.60.83:1337');

	// taking input from user via handling onopen() event handler
	connection.onopen = function(){
		// input.attr('disabled', 'false');
		input.removeAttr('disabled');
		status.text('Choose Name:');	
	}

	// handles any error that occur while accessing the server via onerror() event handler
	connection.onerror = function(error){
		content.html("<p>", {text: "Error " + error + " has occured. There may be some problem with your connection or the server might be down."});

	}

	// allowing the user to post messages, if everything is working properly, via the onmessage() event handler
	connection.onmessage = function(message){
		$('audio').attr('src', 'assets/audios/ping.mp3');
		console.log('sound');
		setTimeout(function(){
		$('audio').removeAttr('src');

		}, 10000);

		input.removeAttr('disabled');

		try{
			var json = JSON.parse(message.data);
		}
		catch (e){
			console.log('this does not look like a valid JSON file', message.data);
			return;
		}
		if (json.type == "color"){
			// first response from the server with user's color
			myColor = json.data;

			status.text(myName + ':').css('color', myColor);

			input.removeAttr('disabled').focus();

		}
		else if (json.type === "history"){

			for (var i = 0; i < json.data.length; i++){
				var author = json.data[i].author,
				message = json.data[i].text,
				color = json.data[i].color,
				time = new Date(json.data[i].time);

				addMessage(author, message, color, time);
			}
		}
		else if (json.type === 'message'){
			// for a single message returned
			var author = json.data.author,
			message = json.data.text,
			color = json.data.color,
			time = new Date(json.data.time);
			addMessage(author, message, color, time);
		}
		else{
			alert('what sort of JSON file have you sent me??');
		}

	}

	input.keydown(function(e){
		if (e.keyCode === 13){

			var msg = $(this).val();

			if(!msg){
				return;
			}

			connection.send(msg);
			$(this).val('');

			// disable the input field to make the user wait until the server sends back response
			input.attr('disabled', 'disabled');

			// checks if this is the first message sent by the user
			if (myName === false){
				myName = msg;
			}

		}
	});

	setInterval(function(){
		if (connection.readyState !== 1){
			status.text('Error');
			input.attr('disabled', 'disabled').val('Unable to communicate with the WebSocket server!');
		}
	}, 5000);

	function addMessage(author, message, color, dt){
		// $('audio').attr('autoplay', 'play');
		// $('audio').removeAttr('autoplay');
		// $('audio').attr('src', 'assets/audios/ping2.mp3');
		// $('audio').removeAttr('src');
		// $('audio').attr('src', 'assets/audios/ping.mp3').delay(6000).removeAttr('src');

		content.prepend('<p><span style="color:' + color + '">' + author + '</span> => ' + (dt.getHours() <10 ? '0' + dt.getHours(): dt.getHours()) + ':' + (dt.getMinutes() <10 ? '0' + dt.getMinutes(): dt.getMinutes()) + '=>' + message + '</p'
			);
	}


});