/*************************************************************************************
This program creates an Etch-a-Sketch in a website where the user can fill boxes with
their mouse by hovering over it, allowing them to draw on a grid.
*************************************************************************************/

function newGrid() {
    const gridContainer = document.querySelector(".grid-container");

    let numBoxes = prompt("Select the number of boxes you want on each side of the grid (Enter a number 1-100)");
    numBoxes = Number(numBoxes);

    // while (numBoxes == NaN || numBoxes < 1 || numBoxes > 100) {
    //     console.log(String(numBoxes));
    //     numBoxes = prompt("Please enter a number 1-100)");
    //     numBoxes = Number(numBoxes);
    //     console.log(numBoxes);
    // }

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
            // when mouse hovers over it
            newBlock.addEventListener("mouseover", () => {
                newBlock.style.backgroundColor = "black";
            });
        }
    }

    const btn = document.querySelector("#box-button");

    btn.addEventListener("click", () => {
        // let numBoxes = prompt("Select the number of boxes you want on the grid (Enter a number 1-100)");
        // numBoxes = Number(numBoxes);

        // // while (numBoxes == NaN || numBoxes < 1 || numBoxes > 100) {
        // //     console.log(String(numBoxes));
        // //     numBoxes = prompt("Please enter a number 1-100)");
        // //     numBoxes = Number(numBoxes);
        // //     console.log(numBoxes);
        // // }

        // // use forEach method to delete current grid
        // const currBoxes = document.querySelectorAll(".block");
        // currBoxes.forEach((box) => {
        //     box.remove();
        // })

        // let newBlockWidth = GRID_LENGTH / numBoxes;

        // // use nested for loops to create new grid with new number of boxes
        // for (let r = 0; r < numBoxes; ++r) {
        //     for (let c = 0; c < numBoxes; ++c) {
        //         let newBlock = document.createElement("div");
        //         newBlock.classList.add("block");

        //         // set new width and height based on calculation
        //         newBlock.style.width = newBlockWidth + "px";
        //         newBlock.style.height = newBlockWidth + "px";
        //         gridContainer.appendChild(newBlock);

        //         newBlock.addEventListener("mouseover", () => {
        //             newBlock.style.backgroundColor = "black";
        //         });
        //     }
        // }

        newGrid();
    });
}

const GRID_LENGTH = 960;

main();

