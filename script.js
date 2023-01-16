// Javascript for Etch-a-Sketch

const gridContainer = document.querySelector('.gridContainer')

// Create 16x16 grid of divs and place in the gridContainer

for (i = 1; i <= 256; i++) {
    const gridBox = document.createElement('div');
    gridBox.setAttribute('class', 'gridBox');
    gridBox.innerHTML = "box";
    gridContainer.appendChild(gridBox);
}