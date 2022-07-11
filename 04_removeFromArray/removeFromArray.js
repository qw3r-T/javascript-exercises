const removeFromArray = function(inputArray) {
	for (let i = 0; i <= (arguments.length-1); i++) {
		let index = inputArray.indexOf(arguments[i+1]);
		if (index > -1) {inputArray.splice(index,1)};
	};
	return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
