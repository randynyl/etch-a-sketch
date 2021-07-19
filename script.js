const container = document.getElementById('grid');
var cell = document.createElement('div');
cell.classList.add('cell');
for (let i = 0; i < 16*16; i++) {
    container.appendChild(cell.cloneNode(true));
}

giveCellsHoverListener();

function giveCellsHoverListener() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            console.log(cell.style.backgroundColor);
            cell.style.backgroundColor = increaseColourAlpha(cell.style.backgroundColor);
        })
    })
}

function increaseColourAlpha(currentColour) {
    if (currentColour == '' || currentColour == 'rgb(255, 255, 255)') {
        return 'rgba(0, 0, 0, 0.2)';
    } else {
        const parts = currentColour.match(/[\d.]+/g);
        if (parts.length === 3) {
            return currentColour;
        } else {
            parts[3] = parseFloat(parts[3]) + 0.2;
            return `rgba(${parts.join(',')})`;
        }
    }
}


const clearBtn = document.getElementById('clear-button');
clearBtn.addEventListener('click', () => {
    var cells = document.querySelectorAll('.cell');
    console.log('clear button clicked');
    cells.forEach((cell) => {
        cell.style.backgroundColor = "#fff";
    })
})

const gridSizeBtn = document.getElementById('grid-size-button');
gridSizeBtn.addEventListener('click', () => {
    console.log('size button clicked');
    rowSize = promptRowSize();
    console.log(rowSize);
    changeGrid(rowSize);
})

function promptRowSize() {  
    let rowSize = 0;  
    do {
        let rowSizeInput = prompt('How many squares per side in the grid? (1-100)');
        if (rowSizeInput == null || rowSizeInput == '') {
            return -1;
        }
        else {
            console.log(rowSizeInput);
            rowSize = parseInt(rowSizeInput);
        }
    } while (rowSize < 1 || rowSize > 100 || isNaN(rowSize))
    return rowSize;
}

function changeGrid(rowSize) {
    if (rowSize == -1) {
        return;
    }
    else {
        var cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.parentNode.removeChild(cell);
        })
        container.style.gridTemplateColumns = `repeat(${rowSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${rowSize}, auto)`;
        for (let i = 0; i < rowSize*rowSize; i++) {
            container.appendChild(cell.cloneNode(true));
        }
        giveCellsHoverListener();
    }
}