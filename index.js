const container = document.getElementById("container")
const gridSelection = document.getElementById("grid-value")
const colorSelection = document.getElementById("colors")

let sqrAmount = 16;
let grid = 4;

let currentColor = 'black'

const squareWrap = document.createElement('div')
squareWrap.classList.add('square-wrapper')
container.appendChild(squareWrap)

window.addEventListener('load', createGrid)

window.addEventListener('load', getGrid)

gridSelection.addEventListener("change", changeGrid);
colorSelection.addEventListener("change", changeColor);

function changeGrid() {

    switch(gridSelection.value) {
        case "4x4":
            sqrAmount = 16;
            grid = 4;
        break;
        case "5x5":
            sqrAmount = 25;
            grid = 5;
        break;
        case "6x6":
            sqrAmount = 36;
            grid = 6;
        break;
        case "7x7":
            sqrAmount = 49;
            grid = 7;
        break;
        case "8x8":
            sqrAmount = 64;
            grid = 8;
        break;
        case "9x9":
            sqrAmount = 81;
            grid = 8;
        break;
        case "10x10":
            sqrAmount = 100;
            grid = 10;
        break;
        default:
            sqrAmount = 16;
            grid = 4;
        break;
    }

    createGrid()
    getGrid()

}

function changeColor(){
    switch(colorSelection.value) {
        case "black":
            currentColor = colorSelection.value
        break;
        case "red":
            currentColor = colorSelection.value
        break;
        case "blue":
            currentColor = colorSelection.value
        break;
        case "green":
            currentColor = colorSelection.value
        break;
        case "yellow":
            currentColor = colorSelection.value
        break;
        case "orange":
            currentColor = colorSelection.value
        break;
        case "pink":
            currentColor = colorSelection.value
        break;
        default:
            currentColor = colorSelection.value
        break;
    }
}

function createGrid() {
    let output = "";

    for(let i = 0; i < sqrAmount; i++) {
        output += `
            <div id="square-${i}" class="square"></div>
        `;
    }
    squareWrap.innerHTML = output;
            
    squareWrap.style.gridTemplate = `repeat(${grid}, 1fr) / repeat(${grid}, 1fr)`
}

function getGrid() {
    const squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', (e) => {

            if (e.target.classList[1] == 'colored') {
                e.target.classList.remove('colored')
                e.target.style.backgroundColor = 'white'
            }
            else {
                e.target.classList.add('colored')
                e.target.style.backgroundColor = currentColor
            }
        });
    });
}