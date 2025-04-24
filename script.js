//starts the page with a interactible grid


//this creates the grid and makes it mouse sensitive 
const gridGenerator = function(x) {
for (i=0; i < x*x; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";

    document.getElementById("container").appendChild(grid);
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "DimGrey"
    })

    const gridProportion = document.querySelectorAll(".grid");
    for (m = 0; m < gridProportion.length; m++) {
        gridProportion[m].style.height = (400/x) + "px"
        gridProportion[m].style.width = (400/x) + "px"
    }
}
}

// button that clears the canvas
const canvasClear = document.getElementById("clear-canvas")
canvasClear.addEventListener("click", () => {
    const canvaSelector = document.querySelectorAll(".grid")
    for (j=0; j < canvaSelector.length; j++) {
        canvaSelector[j].style.backgroundColor = "#dad6c0";
    }
})

// button that resizes current canvas
const canvasResize = document.getElementById("resize-canvas")
canvasResize.addEventListener("click", () =>{
    promptLooper()
})

const promptLooper = function () {
    const canvasDimension = prompt("Insert canvas dimensions:")
    if (canvasDimension > 100) {
        alert("That's too much! Insert a value of 100 or below")
        promptLooper()

    } else if (canvasDimension < 0) {
        alert("That does not work! Insert a value between 1 and 100")
        promptLooper()

    } else if (canvasDimension < 100) {
        gridGenerator(canvasDimension)

    } else {
        alert("Mind entering a number between 1 and 100?")
        promptLooper()
    }
}

// button that randomizes the sketch color
const changeColor = document.getElementById("randomize-color")
changeColor.addEventListener("click", () => {
    grid.style.backgroundColor = randomizeColor()
})

const randomizeColor = function () {
    const randoColor = Math.floor(Math.random()*9);
    if (randoColor === 8) {
        return "Black";
    } else if (randoColor === 7) {
        return "PaleVioletRed";
    } else if (randoColor === 6) {
        return "DarkOrchid";
    } else if (randoColor === 5) {
        return "DarkSlateBlue";
    } else if (randoColor === 4) {
        return "Aqua";
    } else if (randoColor === 3) {
        return "Chartreuse";
    } else if (randoColor === 2) {
        return "Yellow";
    } else if (randoColor === 1) {
        return "GoldenRod";
    } else if (randoColor === 0) {
        return "Tomato";
    }
}

// button that activates opacity mode

// button that toggles grid view
const canvasGrid = document.getElementById("grid-viwer")
canvasGrid.addEventListener("click", () => {
    console.log("click works")
    const canvaSelector = document.querySelectorAll(".grid")
    canvaSelector.classList.toggle("gridded-grid")
})

```
    for (l=0; l < canvaSelector.length; l++) {
        canvaSelector[l].style.borderInlineColor = "DimGrey"
    }



    for (i=0; i < 4; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";

    document.getElementById("container").appendChild(grid);
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "DimGrey"
    })
}
```