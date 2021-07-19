const container = document.getElementById('grid');
var cell = document.createElement('div');
cell.classList.add('cell');
for (let i = 0; i < 16*16; i++) {
    container.appendChild(cell.cloneNode(true));
}

var cells = document.querySelectorAll('.cell')
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hovered')
    })
})

const clearBtn = document.getElementById('clear-button');
clearBtn.addEventListener('click', () => {
    console.log('clear button clicked');
    cells.forEach((cell) => {
        cell.classList.remove('hovered');
    })
})

const gridSizeBtn = document.getElementById('grid-size-button');
gridSizeBtn.addEventListener('click', () => {
    console.log('size button clicked');
    rowSize = promptRowSize();
    console.log(rowSize);

})

function promptRowSize() {    
    do {
        let rowSizeInput = prompt('How many squares per side in the grid? (1-100)');
        if (rowSizeInput == null || rowSizeInput == '') {
            return -1;
        }
        else {
            console.log(rowSizeInput);
            let rowSize =  parseInt(rowSizeInput);
        }
    } while (rowSize < 1 || rowSize > 100 || isNaN(rowSize))
    return rowSize;
}