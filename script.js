let divContainer = document.querySelector("#divContainer");
let gridWidth = 20; // make same as gh
let gridHeight = 20;

let dCHeight = window.innerHeight;
let dCWidth = window.innerWidth;

console.log(window.innerHeight*0.6);

// Creating div grid

for (let i = 0; i < gridHeight; i++) {
    let div = document.createElement("div");
    div.classList.toggle("gridColumn")
    divContainer.appendChild(div);
    for (let j = 0; j < gridWidth; j++) {
        let div2 = document.createElement("div");
        div2.classList.toggle("gridCell")
        div.style.height = (dCHeight*0.6)/gridWidth;
        div.style.width = (dCHeight*0.6)/gridWidth;
        div.appendChild(div2);        
    }
}
