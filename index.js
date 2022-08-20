const container = document.getElementById("container")
const canvasLabel = document.getElementById('canvas-label')
const gridSelection = document.getElementById("grid-value")
const colorValue = document.getElementById('color-value')
const border = document.getElementById('border')
const eraseBtn = document.getElementById('erase')

// Initial values to variables & displaying canvas size
let sqrAmount = 16;
let grid = 4;
canvasLabel.textContent = `Canvas Size ${gridSelection.value}x${gridSelection.value}`
let currentColor = '#000000'
let isMouseDown = false
border.checked = true

// Just creating wrapper for the squares, because why not :D
const squareWrap = document.createElement('div')
squareWrap.classList.add('square-wrapper')
container.appendChild(squareWrap)

// Initial call
window.addEventListener('load', createGrid)
window.addEventListener('load', listenGrid)

// Add listeners to input elements
gridSelection.onchange = () => (changeGrid())
colorValue.onchange = () => (changeColor())
border.onchange = () => (borderControl())
eraseBtn.onclick = () => (changeGrid())

// Listen mouse events
document.body.onmousedown = () => (isMouseDown = true)
document.body.onmouseup = () => (isMouseDown = false)

// Gets selected grid size, displays it to the user and resets grid
function changeGrid() {
    canvasLabel.textContent = `Canvas Size ${gridSelection.value}x${gridSelection.value}`
    sqrAmount = gridSelection.value * gridSelection.value
    grid = gridSelection.value
    createGrid()
    listenGrid()
}

// Gets current color selection from input
function changeColor(){
    currentColor = colorValue.value
}

// Creates Squares into a grid
function createGrid() {
    let output = "";
    for(let i = 0; i < sqrAmount; i++) {
        output += `
            <div id="square-${i}" class="square border-active"></div>
        `;
    }
    squareWrap.innerHTML = output;          
    squareWrap.style.gridTemplate = `repeat(${grid}, 1fr) / repeat(${grid}, 1fr)`
}

// Add eventlisteners
function listenGrid() {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        ['mousedown','mouseover', 'touchmove'].forEach( evt => {
            square.addEventListener(evt, colorGrid, false)
        });
    })
}

// Toggle between borders
function borderControl() {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.classList.toggle('border-active')
    });
}

// Colors selected squares
function colorGrid(e) {
    if (e.target.classList.contains('colored')) {
        if (e.type === 'mousedown') {
            e.target.classList.remove('colored')
            e.target.style.backgroundColor = 'white'
        }
    }
    else {
        if(isMouseDown == true && e.type === 'mouseover')  {
            e.target.classList.add('colored')
            e.target.style.backgroundColor = currentColor
        }
        else if (e.type === 'mousedown') {
            e.target.classList.add('colored')
            e.target.style.backgroundColor = currentColor
        }
    }
}