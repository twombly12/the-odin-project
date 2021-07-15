const fibonacci = function(sequence) {
    let previous = 0;
    let current = 1;
    let next = 1;
    if(sequence < 0) return "OOPS";
    if(sequence === 0) return 0;
    for(i = 1; i < sequence; i++) {
        next = current + previous;
        previous = current;
        current = next;
    }
    return next;
}

module.exports = fibonacci



// jasmine fibonacci.spec.js