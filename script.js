
// creates the grid and makes it mouse sensitive 
for (i=0; i < 16; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    document.getElementById("container").appendChild(grid);
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "red"
    })
}

// button that resize current canvas
const canvasResize = document.getElementById("resize-canvas")
canvasResize.addEventListener("click", () =>{
    prompt("insert canvas dimensions:")  
})

```
const hover = document.querySelector(".grid");
hover.addEventListener("mouseover", () => {
    alert("Did this work?")
})
```

