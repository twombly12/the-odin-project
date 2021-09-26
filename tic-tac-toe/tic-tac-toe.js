// Players
const createPlayer = (name, marker) => {
    return {
        name,
        marker,
    }
}
let player1 = createPlayer("Player 1", "X");
let player2 = "";

//Make Gameboard
const makeGameboard = (function() {
    const create = () => {
        const gameboardSquares = document.getElementById("gameboard");
        for (i = 1; i <= 9; i++) {
            var squareDiv = document.createElement('div');
            squareDiv.setAttribute("id",`square${i}`);
            squareDiv.setAttribute("class","play-field");
            gameboardSquares.appendChild(squareDiv);
        }
    }
    const reset = () => {
        const gameboardSquares = document.getElementById("gameboard");
        gameboardSquares.innerHTML = '';
        create();
    }
    return {
        create,
        reset,
    }
})();

//Get Player Names 
const getSecondPlayer = (function() {
    const populate = (buttonName) => {
        let playerName = buttonName;
        let playerMarker = "O";
        player2 = createPlayer(playerName, playerMarker);
    }
    return {
        populate,
    }

 
})();

// Item clicked or not
const clickedOrNot = (function() {
    let clickedDivs = [];
    const check = (value) => {
        return clickedDivs.indexOf(value) > -1;
    }
    const add = (value) => {
        clickedDivs.push(value);
    }
    const resetArray = () => {
        clickedDivs.length = 0;
    }
    return {
        check,
        add,
        resetArray,
        clickedDivs,
    }
})();

// Whose Turn
const whoseTurnIsIt = (function() {
    let turnMarker = "";
    let count = 1;
    const playersTurn = () => {    
        if(count % 2) {
            turnMarker = player1.marker;
        } else {
            turnMarker = player2.marker;
        }
        return turnMarker;
    }
    const clickCount = () => {
        count++;
        return count;
    }
    const reset = () => {
         count = 1;
         turnMarker = "";
    }
    return {
        playersTurn,
        clickCount,
        reset,
    }
})();

// Player Inputs
const playerTurns = (function() {
    const buttonInput = document.getElementById("gameboard");
    buttonInput.addEventListener('click', event => {
        let target = event.target;
        if(player2.name !== undefined) {
            if (target.matches(".play-field") && clickedOrNot.check(target.id) == false) {
                filledsquaresArray.push(target.id)
                    target.innerHTML = whoseTurnIsIt.playersTurn();
                    whoseTurnIsIt.clickCount();
                    clickedOrNot.add(target.id);
            }   
        }
        else {
            alert("Please select an opponent");
        }
        checkForWinner.whoWon();
    });

    let filledsquaresArray = [];
    let possibleSquares = [
        'square1','square2','square3','square4','square5','square6','square7','square8','square9',
    ];

    const computerTurn = () => {
        let computerOptions = possibleSquares.filter(item => !filledsquaresArray.includes(item));

        // for(i = possibleSquares.length - 1; i > 0 ; i--) {
        //     for(iTwo = 0; iTwo < filledsquaresArray.length - 1; iTwo++) {
        //         if(possibleSquares[i] !== filledsquaresArray[iTwo]) {
        //             computerOptions.push(possibleSquares[i].substring(6));
        //         }
        //     }
        // }
        document.getElementById(`square${computerOptions[Math.floor(Math.random()*computerOptions.length)]}`).innerHTML = player2.marker;
        console.log(computerOptions[Math.floor(Math.random()*computerOptions.length)]);
        whoseTurnIsIt.clickCount();
    }
    return {
        computerTurn,
        possibleSquares,
        filledsquaresArray,
    }
})();


// Check Square Content
const getSquareContent = (function() {
    const content = (arrayNum, objectPosition) => {
        return document.getElementById(`square${checkForWinner.checkData[arrayNum][objectPosition]}`).innerHTML;
    }
    return {
        content
    }
})();

// Win Logic
const checkForWinner = (function() {
    const checkData = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ]
    const whoWon = () => {
        for(i = 0; i <= 7; i++) {
            var firstSquare = getSquareContent.content(i, 0);
            var secondSquare = getSquareContent.content(i, 1);
            var thirdSquare = getSquareContent.content(i, 2);

            if( firstSquare.length > 0 && secondSquare.length > 0 && thirdSquare.length > 0) {
                if(firstSquare == secondSquare && firstSquare == thirdSquare) {
                    let announceWinner = document.getElementById('announce-winner');
                    let winnerText = document.getElementById('winner-container');
                    winnerText.innerHTML = winningPlayer() + " Wins!";
                    announceWinner.classList.remove('hide-winner');
                }   
            }
        }
    }
    const winningPlayer = () => {
        if(player2.marker == whoseTurnIsIt.playersTurn()) {
            return player1.name;
        } if(player1.marker == whoseTurnIsIt.playersTurn()) {
            return player2.name;
        } 
    }
    return {
        whoWon,
        winningPlayer,
        checkData,
    }
})();

//Reset Game
const resetGame = (function() {
    const reset = () => {
            whoseTurnIsIt.reset();  
            clickedOrNot.resetArray();
            makeGameboard.reset();
            let announceWinner = document.getElementById('announce-winner');
            announceWinner.classList.add('hide-winner');
    }
    return {
        reset,
    }
})();


// Initialize
makeGameboard.create();
checkForWinner.whoWon();