const repeatString = function(message,repeat) {
	if (repeat < 0) {return 'ERROR'}
	let finalMessage = '';
	for (let i = 0; i < repeat; i++) {
		finalMessage = finalMessage.concat(message);
	}
	return finalMessage;
};

// Do not edit below this line
module.exports = repeatString;
