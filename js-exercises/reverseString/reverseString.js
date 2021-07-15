const reverseString = function(word) {
	var wordLength = word.length;
	var wordArray = word.split("");
	output = "";
	for (i = wordLength - 1; i >=0; i--) {
		output += wordArray[i];
	}
	return output;
}

module.exports = reverseString
