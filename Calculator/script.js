const add = function(a, b) {
    return Number(a) + Number(b);
}

const subtract = function(a, b) {
    return Number(a) - Number(b);
}

const multiply = function(a, b) {
    return Number(a) * Number(b);
}

const divide = function(a, b) {
    if(a == 0 || b == 0 ) {
        userInput = [];
        previousNum = "";
        currentNum = "";
        operator = "";
        equationDisplay = "";
        currentDisplay = "";
        return "Cannot Divide by Zero!"
        
    }
    return Number(a) / Number(b);
}


const operate = function(a, operator, b) {
    if(operator == "+") {
        return add(a,b);
    }
    if(operator == "-") {
        return subtract(a,b);
    }
    if(operator == "*") {
        return multiply(a,b);
    }
    if(operator == "/") {
        return divide(a,b);
    }
}


// Input variables
let userInput = [];
let currentNum = "";
let previousNum = "";
let operator = "";

// Screen Display Variables
let equationDisplay = "";
let currentDisplay = "";

// Current Display
const currentScreen = function() {
    currentDisplay = userInput.join("");
    currentDisplay = currentDisplay.replace(/\s+/g, '');
}

// Equation Display
const equationScreen = function() {
    equationDisplay += currentDisplay;
}

// Receive Number Input & Add to Display
const btnClick = document.getElementById("btnNumbers");
const largeDisplay = document.getElementById("displayLarge");
const smallDisplay = document.getElementById("displaySmall");
btnClick.addEventListener('click', event => {
    let target = event.target;
    if (target.matches("button")) {
        userInput.push(target.innerHTML);
        currentScreen();
        currentNum = currentDisplay;
        largeDisplay.innerHTML = currentNum;
        largeDisplay.classList.add('displayTxtLarge');
    }
});

//Receive & Handle Operators
const operatorClick = document.getElementById("btnOperators");
operatorClick.addEventListener("click", event => {
    let target = event.target;
    if(target.matches("button")) {
        operator = target.innerHTML.replace(/\s+/g, '');
        previousNum = currentNum;
        userInput.push("&nbsp" + target.innerHTML + "&nbsp");
        currentScreen();
        equationScreen();
        userInput = [];
        largeDisplay.innerHTML = currentNum;
        smallDisplay.innerHTML = equationDisplay;
        smallDisplay.classList.add('displayTxtSmall');
    }
});

//Equals
const equalsClick = document.getElementById("equalsBtn");
equalsClick.addEventListener('click', event => {
    let target = event.target;
    if(target.matches("button")) {
        currentNum = (operate(previousNum, operator, currentNum));
        equationDisplay += currentDisplay;
        smallDisplay.innerHTML = equationDisplay;
        largeDisplay.innerHTML = currentNum;
        userInput = [];
        previousNum = currentNum;
        operator = 0;
    }
});

// Clear Display
const clearClick = document.getElementById("clear");
clearClick.addEventListener('click', event => {
    largeDisplay.innerHTML = "";
    smallDisplay.innerHTML = "";
    userInput = [];
    previousNum = "";
    currentNum = "";
    operator = "";
    equationDisplay = "";
    currentDisplay = "";

});

//Delete 1 character on Display
const deleteClick = document.getElementById("delete");
deleteClick.addEventListener('click', event => {
    userInput.splice(userInput.length - 1, 1);
    currentScreen();
    largeDisplay.innerHTML = currentDisplay;
});




function calculate() {
    add();
    subtract();
    multiply();
    divide();
    operate();
}

calculate();