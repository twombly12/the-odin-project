const palindromes = function(input) {
    var characters = input.toLowerCase().replace(/[^a-zA-Z ]/g,'').replaceAll(" ",'');
    var firstOrder = characters.split("");
    console.log(firstOrder);
    var backwardsOrder = firstOrder.slice().reverse();
    console.log(backwardsOrder);
    for(i = 0; i < firstOrder.length; i++) {
        if(firstOrder[i] !== backwardsOrder[i]) {
            return false;
        }
        return true;
    }
}

module.exports = palindromes



/* var output = "Hello world!?:.".toLowerCase().replace(/[^a-zA-Z ]/g,'').replace(" ",'');
console.log(output); */

// palindromes('ZZZZ car, a man, a maraca.')

// jasmine palindromes.spec.js

