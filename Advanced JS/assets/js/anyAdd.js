// function anyAdd () {
// 	var sum = 0
// 	, inputType;
// 	for (var i in arguments){
// 		if (typeof arguments[i] == "number"){
// 			sum += arguments[i]; 
// 		}
// 		else if (typeof arguments[i] == "string"){
// 			sum += parseInt(arguments[i]);
// 		}
// 		else if (arguments[i] instanceof Array){
// 			sum += anyAdd.apply(this, arguments[i]);
// 		}
// 		else if (arguments[i] instanceof Function){
// 			sum += anyAdd(arguments[i]());
// 		}	 
// 	}
// 	return sum;
// }

function anyAdd () {
	var sum = 0;

	function parseAddArg(input){
		if (typeof input == "number"){
			return input; 
		}
		else if (typeof input == "string"){
			return parseInt(input);
		}
		else if (input instanceof Array){
			return parseAddArg.apply(this, input);
		}
		else if (input instanceof Function){
			return parseAddArg(input());
		}	 
	}

	for (var i in arguments){
		sum += parseAddArg(arguments[i]);
	}
	return sum;
}


console.log(anyAdd(2, [1,2,3], 1, 2, function(){
	return [1,2,3, function(){
		return 2;
	}];
}));


function recurAdd(){
	// console.dir(arguments);
	c = arguments;
	Array.prototype.splice.call(arguments, 1);
	// console.log(argArray.splice(1));
	// console.log(typeof(argArray), argArray instanceof Array);
	// console.log(arguments.splice(1));
	// console.log(c.splice(1));
	// return recurAdd(arguments.splice(1))+arguments[0];
	return argArray[0] + recurAdd(this, argArray.splice(1));
}


function add(){
  function parseArg(n){
    if (typeof n =="string") return parseInt(n)
      if(typeof n =="function") return parseArg(n());
    if(n instanceof Array) return add.apply(this,n);
    return n;
  }
  function getRemaining(args){

    var remaining=[];
    for (var i=1;i<args.length;i++)
      remaining.push(args[i]);
      return remaining;
  }
    return arguments.length === 1 ? arguments[0] : arguments[0]+ add.apply(this,getRemaining(arguments))
}
