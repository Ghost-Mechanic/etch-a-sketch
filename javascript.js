/*************************************************************************************
This program creates an Etch-a-Sketch in a website where the user can fill boxes with
their mouse by hovering over it, allowing them to draw on a grid.
*************************************************************************************/

// This function creates a new grid with a user-inputted number of boxes on each side
function newGrid() {
    const gridContainer = document.querySelector(".grid-container");

    let numBoxes = prompt("Select the number of boxes you want on each side of the grid (Enter a number 1-100)");
    numBoxes = Number(numBoxes);

    // make sure user input is valid before continuing
    while (isNaN(numBoxes) || numBoxes < 1 || numBoxes > 100) {
        numBoxes = prompt("Please enter a number 1-100");
        numBoxes = Number(numBoxes);
    }

    // use forEach method to delete current grid
    const currBoxes = document.querySelectorAll(".block");
    currBoxes.forEach((box) => {
        box.remove();
    })

    let newBlockWidth = GRID_LENGTH / numBoxes;

    // use nested for loops to create new grid with new number of boxes
    for (let r = 0; r < numBoxes; ++r) {
        for (let c = 0; c < numBoxes; ++c) {
            let newBlock = document.createElement("div");
            newBlock.classList.add("block");

            // set new width and height based on calculation
            newBlock.style.width = newBlockWidth + "px";
            newBlock.style.height = newBlockWidth + "px";
            gridContainer.appendChild(newBlock);

            newBlock.addEventListener("mouseover", () => {
                newBlock.style.backgroundColor = "black";
            });
        }
    }
}

// this function generates a random color for the rainbow button
function randomColor() {
    let hexValues = "0123456789ABCDEF";
    let hexColor = "#";

    // build hex color using for loop to get 6 random hex characters
    for (let i = 0; i < 6; ++i) {
        let index = Math.floor(Math.random() * 16);
        hexColor += hexValues[index]; 
    }

    return hexColor;
}

function main() {
    const gridContainer = document.querySelector(".grid-container");

    let rows = 16;
    let cols = 16;

    // use two nested for loops to setup 16x16 grid
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            let newBlock = document.createElement("div");
            newBlock.classList.add("block");
            gridContainer.appendChild(newBlock);

            // add event listener to each block that changes its color to black
            // when mouse hovers over it by default
            newBlock.addEventListener("mouseover", () => {
                newBlock.style.backgroundColor = "black";
            });
        }
    }

    const btn = document.querySelector("#box-button");

    // add button to change grid box size
    btn.addEventListener("click", () => {
        newGrid();
    });

    // initialize references to two buttons to change the color of the box filling
    const rainbowBtn = document.querySelector("#rainbow-button");
    const blackBtn = document.querySelector("#black-button");

    // boxes are filled with random color when clicking the rainbow option
    rainbowBtn.addEventListener("click", () => {
        const currBoxes = document.querySelectorAll(".block");

        // add new event listener to all blocks to make them filled with a random color
        currBoxes.forEach((box) => {
            box.removeEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
            });
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = randomColor();
            });
        });
    });

    // boxes are filled with black when clicking the black option, or by default
    blackBtn.addEventListener("click", () => {
        const currBoxes = document.querySelectorAll(".block");

        // add event listener to all boxes to make them filled with black
        currBoxes.forEach((box) => {
            box.removeEventListener("mouseover", () => {
                box.style.backgroundColor = randomColor();
            });
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
            });
        });
    });
}

const GRID_LENGTH = 960;

main();

