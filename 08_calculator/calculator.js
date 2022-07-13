const add = function() {
	let total = 0;
	for (let i = 0; i<arguments.length; i++) {
		total += arguments[i];
	};
	return total;
};

const subtract = function() {
	return arguments[0] - arguments[1];	
};

const sum = function(list) {
	let total = 0;
	for (let i = 0; i<list.length; i++) {
		total += list[i];
	};
	return +total;
};

const multiply = function(list) {
	let total = 1;
	for (let i = 0; i<list.length; i++) {
		total *= list[i];
	};
	return +total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let total = 1;
	for (a; a > 0; a--) {
		total *= a;
	};
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
