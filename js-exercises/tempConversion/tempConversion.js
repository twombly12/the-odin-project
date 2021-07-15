const ftoc = function(farenheit) {
	cconvert = (farenheit - 32) * 5/9;
	cconvert = Math.round(cconvert * 10) / 10;
	return cconvert;
}

const ctof = function(celsius) {
	fconvert = (celsius * 9/5) + 32;
	fconvert = Math.round(fconvert * 10) / 10;
	return fconvert;
}

module.exports = {
  ftoc,
  ctof
}
