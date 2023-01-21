// Javascript for Etch-a-Sketch

// Create 16x16 grid (default size) of divs and place in the gridContainer
const defaultGridSize = 16;
const defaultMode = 'Standard'

buildNewGrid(defaultGridSize)
setFillMethod(defaultMode)

//Buttons to adjust grid size and reset
const gridSizeBtn = document.querySelector('.gridSizeBtn');
const resetBtn = document.querySelector('.resetBtn');

//Buttons to adjust mode
const standardModeBtn = document.querySelector('.standardModeBtn')
const colorModeBtn = document.querySelector('.colorModeBtn')
const advancedModeBtn = document.querySelector('.advancedModeBtn')

standardModeBtn.classList.add('selectedBtn');

gridSizeBtn.addEventListener('click', () => {
    let gridSize = Number(window.prompt('What size of grid do you want? (Min 2, Max 100)', 16));

    while(true) { 
        if (gridSize == 0){
            gridSize = defaultGridSize;
            break
        }
        else if (gridSize > 100 || gridSize < 2) {
            gridSize = Number(window.prompt('Chosen size was either too big or too small. What size of grid do you want? (Min 2, Max 100)', 16));
            continue
        }
        else break
    }

    const mode = document.querySelector('.selectedBtn').innerHTML;

    buildNewGrid(gridSize)
    setFillMethod(mode)
})

resetBtn.addEventListener('click', () => {
    const gridSize = Math.sqrt(document.querySelectorAll('.gridBox').length);
    const mode = document.querySelector('.selectedBtn').innerHTML;

    buildNewGrid(gridSize)
    setFillMethod(mode)
})

function randomColor () {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let rgbColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return rgbColor
}

function incrementBlack (currentColor) {
    let currentColorValue = currentColor.slice(4,currentColor.indexOf(','));
    if (currentColorValue == '') {
        currentColorValue = '255';
    }

    let newColorValue = Math.max(Number(currentColorValue) - 25, 0);
    return 'rgb(' + newColorValue + ',' + newColorValue + ',' + newColorValue + ')';
}

function buildNewGrid (gridSize) {
    const gridContainer = document.querySelector('.gridContainer');

    gridContainer.innerHTML = '';

    for (i = 1; i <= (gridSize * gridSize); i++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridBox');
        gridBox.style.width = `${800/gridSize - 2}px`;
        gridBox.style.height = `${800/gridSize - 2}px`;
        gridContainer.appendChild(gridBox);
    }
}

function setFillMethod (mode) {
    const gridBoxes = document.querySelectorAll('.gridBox');

    gridBoxes.forEach((item) => {
        item.addEventListener('mouseover', function (e) {
            if (mode == 'Standard') {
                e.target.style.background = 'rgb(0,0,0)';
            }
            else if (mode == 'Multi-Color') {
                e.target.style.background = randomColor()
            }
            else {
                e.target.style.background = incrementBlack(e.target.style.background)
            }
        });
    })
}


advancedModeBtn.addEventListener('click', () => {
    advancedModeBtn.classList.add('selectedBtn');
    colorModeBtn.classList.remove('selectedBtn');
    standardModeBtn.classList.remove('selectedBtn');

    const gridSize = Math.sqrt(document.querySelectorAll('.gridBox').length);
    const mode = document.querySelector('.selectedBtn').innerHTML;

    buildNewGrid(gridSize)
    setFillMethod(mode)
})

colorModeBtn.addEventListener('click', () => {
    advancedModeBtn.classList.remove('selectedBtn');
    colorModeBtn.classList.add('selectedBtn');
    standardModeBtn.classList.remove('selectedBtn');

    const gridSize = Math.sqrt(document.querySelectorAll('.gridBox').length);
    const mode = document.querySelector('.selectedBtn').innerHTML;

    buildNewGrid(gridSize)
    setFillMethod(mode)
})

standardModeBtn.addEventListener('click', () => {
    advancedModeBtn.classList.remove('selectedBtn');
    colorModeBtn.classList.remove('selectedBtn');
    standardModeBtn.classList.add('selectedBtn');

    const gridSize = Math.sqrt(document.querySelectorAll('.gridBox').length);
    const mode = document.querySelector('.selectedBtn').innerHTML;

    buildNewGrid(gridSize)
    setFillMethod(mode)
})
