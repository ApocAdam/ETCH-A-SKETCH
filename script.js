let divContainer = document.querySelector("#divContainer");
let gridWidth = 16;
let gridHeight = 16;

// Creating div grid

for (let i = 0; i < gridHeight; i++) {
    let div = document.createElement("div");
    div.classList.toggle("gridRow")
    divContainer.appendChild(div);
    for (let j = 0; j < gridWidth; j++) {
        let div2 = document.createElement("div");
        div2.classList.toggle("gridCell")
        div.appendChild(div2);        
    }
}
