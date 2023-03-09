const playerFactory = (playerName, marker) => {
    return { playerName, marker }
}

const player1 = playerFactory('Player 1', 'X')
const player2 = playerFactory('Player 2', 'O')

const gameBoard = (() => {
    const boardDiv = document.querySelector('#gameboard')
    boardDiv.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        boardDiv.innerHTML += `<span id="boardSection${i}" class="boardSection"></span>`
    }
})()

const playGame = (() => {

    let turn = 1;
    let marker = 'X'

    const tiles = document.querySelectorAll('.boardSection')


    const addMarker = function() {
        if (turn % 2 == 0) {
            marker = 'O'
        } else {
            marker = 'X'
        }
        if (this.innerHTML == '') {
            this.innerHTML = marker;

            setTimeout(() => {
                checkWinner()
                turn++;
            }, 10)

        } else {
            alert('Select an unused tile')
        }


    }

    tiles.forEach(element => {
        element.addEventListener('click', addMarker)
    })

    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]

    const checkWinner = function() {
        const tileMarkers = Array.from(tiles).map(element => {
            return element.innerHTML
        })
        for (let i = 0; i < conditions.length; i++) {
            if (tileMarkers[conditions[i][0]] != '' && tileMarkers[conditions[i][0]] == tileMarkers[conditions[i][1]] && tileMarkers[conditions[i][0]] == tileMarkers[conditions[i][2]]) {
                alert('Winner!')
                break
            } else if (turn == 10) {
                alert('Draw!')
                break
            }
        }
    }


})()