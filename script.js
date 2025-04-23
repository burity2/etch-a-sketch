
// creates the grid and makes it mouse sensitive 
for (i=0; i < 16; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";

    document.getElementById("container").appendChild(grid);
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "red"
    })
}

//button that clear canvas
const canvasClear = document.getElementById("clear-canvas")
canvasClear.addEventListener("click", () => {
    console.log("at least the click works")
    const canvaSelector = document.querySelectorAll(".grid")
    for (j=0; j < canvaSelector.length; j++) {
        canvaSelector[j].style.backgroundColor = "#dad6c0";
    }
})

// button that resize current canvas
const canvasResize = document.getElementById("resize-canvas")
canvasResize.addEventListener("click", () =>{
    prompt("insert canvas dimensions:")  
})

// button that randomizes the sketch color

// button that activates opacity mode

