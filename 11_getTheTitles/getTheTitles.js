const getTheTitles = function(list) {
	//create returnList
	let returnList = [];
	//loop through the list
	list.forEach((e)=>returnList.push(e.title));
	//return the filled list
	return returnList;
};

// Do not edit below this line
module.exports = getTheTitles;
