let divContainer = document.querySelector("#divContainer");
let gridWidth = 10; // make same as gh
let gridHeight = gridWidth;

let dCHeight = window.innerHeight;
let dCWidth = window.innerWidth;
let dC = Math.min(dCHeight, dCWidth)*0.6

divContainer.style.height = `${dC+3*gridWidth}px`;
divContainer.style.width = `${dC+3*gridHeight}px`; // need to scaling with border with
// Creating div grid

for (let i = 0; i < gridHeight; i++) {
    let div = document.createElement("div");
    div.classList.toggle("gridColumn")
    divContainer.appendChild(div);
    for (let j = 0; j < gridWidth; j++) {
        let div2 = document.createElement("div");
        div2.classList.toggle("gridCell")
        div2.style.height = `${(dC)/gridWidth}px`;
        div2.style.width = `${(dC)/gridWidth}px`;
        div.appendChild(div2);        
    }
}
