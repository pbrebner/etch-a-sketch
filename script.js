// Javascript for Etch-a-Sketch

const gridContainer = document.querySelector('.gridContainer')

// Create 16x16 grid (default size) of divs and place in the gridContainer
const defaultGridSize = 16;

for (i = 1; i <= defaultGridSize * defaultGridSize; i++) {
    const gridBox = document.createElement('div');
    gridBox.setAttribute('class', 'gridBox');
    gridContainer.appendChild(gridBox);
}

//Hover Event
const gridBoxes = document.querySelectorAll('.gridBox');

gridBoxes.forEach((item) => {
    item.addEventListener('mouseover', function (e) {
        e.target.style.background = 'grey';
    });
})

//Button to adjust grid size
const gridSizeBtn = document.querySelector('.gridSizeBtn')

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

    gridContainer.innerHTML = '';

    for (i = 1; i <= (gridSize * gridSize); i++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridBox');
        gridBox.style.width = `${960/gridSize -2}px`;
        gridBox.style.height = `${960/gridSize -2}px`;
        gridContainer.appendChild(gridBox);
    }

    const gridBoxes = document.querySelectorAll('.gridBox');

    gridBoxes.forEach((item) => {
        item.addEventListener('mouseover', function (e) {
            e.target.style.background = 'grey';
        });
    })
})