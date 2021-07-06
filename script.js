const container = document.getElementById("grid");
var cell = document.createElement("div");
cell.classList.add('cell');
for (let i = 0; i < 16*16; i++) {
    container.appendChild(cell.cloneNode(true));
}