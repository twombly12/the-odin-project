const add = function(a,b)  {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0 );
}

const multiply = function(array) {
	return array.reduce((total, current) => total * current );
}

const power = function(a, b) {
	return a ** b;
}

const factorial = function(num) {
	if(num === 0 ) return 1;
	var factorialNum = 1;
	for(i = 1; i <= num; i++) {
		factorialNum *= i;
	}
	return factorialNum;
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

