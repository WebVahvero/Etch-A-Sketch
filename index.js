const container = document.getElementById("container")
const gridSelection = document.getElementById("grid-value")
const colorValue = document.getElementById('color-value')

let sqrAmount = 16;
let grid = 4;
let currentColor = '#000000'

const squareWrap = document.createElement('div')
squareWrap.classList.add('square-wrapper')
container.appendChild(squareWrap)

window.addEventListener('load', createGrid)
window.addEventListener('load', getGrid)

gridSelection.addEventListener("change", changeGrid);
colorValue.addEventListener("change", changeColor);

function changeGrid() {
    sqrAmount = gridSelection.value * gridSelection.value
    grid = gridSelection.value

    createGrid()
    getGrid()
}

function changeColor(){
    currentColor = colorValue.value
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
