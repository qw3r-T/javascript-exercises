const sumAll = function(min,max) {
	if (typeof min != 'number' || typeof max != 'number'
		|| min < 0 || max < 0){return 'ERROR'};
	let result = 0;
	if (min > max) {let tmp = max; max = min; min = tmp; };
	for (min;min <= max;min++) {result += min};
	return result;
};

// Do not edit below this line
module.exports = sumAll;
