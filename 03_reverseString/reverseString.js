const reverseString = function(inputString) {
	let inputArray = inputString.slice('');
	let outputArray = [];
	for (let i = 0; i < inputArray.length; i++) {
		outputArray.push(inputArray[inputArray.length-(i+1)]);
	};
	let outputString = outputArray.join('')
	return outputString;
};

// Do not edit below this line
module.exports = reverseString;
