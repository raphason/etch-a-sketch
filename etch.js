totalGridSize = 480;
const container = document.querySelector('.grid-container');
var squares;
var penColor = 111111;
//var resetValue = 24;

createGrid(24);

function createGrid(gridSize) {
    //nested for loop to create rows + columns
    //row is a flexbox container

    squareSize = totalGridSize / gridSize;

    for (row = 0; row < gridSize; row++) {
        var divRow = document.createElement('div');
        divRow.style.display = 'flex';
        container.appendChild(divRow);

        for (column = 0; column < gridSize; column++) {
            var divCol = document.createElement('div');
            divCol.style.width = squareSize.toString() + "px";
            divCol.style.height = squareSize.toString() + "px";
            divCol.style.background = "#eeeeee";
            divCol.className = "square";
            divRow.appendChild(divCol);
            
        }
    }
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function(e) {
            if (e.buttons == 1 || e.buttons == 3) {
                e.target.style.background = "#" + penColor;
            }
        });
    });
}

function resetGrid() {
    squares.forEach((square) => {
        square.style.background = "#eeeeee";
    });
}

function removeGrid() {
    var nodes = container.childNodes;
    for (var i = nodes.length-1; i > -1; i--) {
        nodes[i].remove();
    }
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", function(e) {
    resetGrid();
});

var slider = document.getElementById('myRange');
const sliderlabel = document.querySelector('.slider-label');
slider.oninput = function() {
    sliderlabel.textContent = "Grid Size: " + this.value + " x " + this.value;
    removeGrid();
    createGrid(this.value);
}