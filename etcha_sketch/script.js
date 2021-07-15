
const gridContainer = document.getElementById('squares');


function createGrid(dimensions) {
    gridContainer.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

    let gridDimensions = dimensions * dimensions;
    
    for (let i = 0; i < gridDimensions; i++) {
        const div =  document.createElement('div');
        div.classList = "square-background";
        gridContainer.appendChild(div);
    }
    draw();
}




function draw() {
  const paint = document.querySelectorAll('.square-background');

  paint.forEach((item) => {
    item.count = 0;
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#000';
      e.target.count += 1;
      e.target.style.opacity = 0.1 * e.target.count;
    });
  });
}

function erase() {
  const erase = document.querySelectorAll('.square-background');

  erase.forEach((item) => {
    item.style.backgroundColor = '#FFF';
    item.style.opacity = 1;
  });
}


function eraseButton() {
  const eraseBtn = document.querySelector('#clear');
  eraseBtn.addEventListener('click', erase);
}


function enterSize() {
  var size = prompt("Please enter a number smaller than 64");
  if(size <= 64) {
    erase();
    removeCells()
    createGrid(size);

  } else {
    var size = prompt("Your number was too large. Please enter a number smaller than 64");
  }
}

function removeCells() {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function startGame() {
  createGrid(32);
  draw();
  eraseButton();
}

startGame();