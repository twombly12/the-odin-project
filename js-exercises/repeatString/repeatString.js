const repeatString = function(word, number) {
	let output = '';
	if (number <0) {
		return "ERROR";
	}	
	else {
		for (i = 0; i < number; i++) {
			output += word;
		}
	}
	return output;
}

module.exports = repeatString
