/*************************************************************************************
This program creates an Etch-a-Sketch in a website where the user can fill boxes with
their mouse by hovering over it, allowing them to draw on a grid.
*************************************************************************************/

const gridContainer = document.querySelector(".grid-container");

// use two nested for loops to setup 16x16 grid
for (let r = 0; r < 16; ++r) {
    for (let c = 0; c < 16; ++c) {
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