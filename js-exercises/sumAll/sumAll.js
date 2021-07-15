const sumAll = function(x, y) {
	if(!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
	if (x <= 0 || y <= 0) return "ERROR";
	if (x <= y) {
		start = x;
		end = y;
	} else {
		start = y;
		end = x;
	}
	var sum = 0;
	for (start; start <= end; start++) {
		sum +=start;
	}
	return sum;
}

module.exports = sumAll
