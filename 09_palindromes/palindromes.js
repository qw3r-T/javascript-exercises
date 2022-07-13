const palindromes = function (text) {
	//remove space and punctuation
	text = text.replace(/[^a-z]/gi, '');
	console.log(text);
	//lowercase
	text = text.toLowerCase()
	//check if it's a palindrome
	for (let i = 0; i<text.length; i++) {
		if (text[i] != text[text.length-(i+1)]) {return false};
	};
	return true;
};

// Do not edit below this line
module.exports = palindromes;
