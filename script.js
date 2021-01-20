let divContainer = document.querySelector("#divContainer");
let gridWidth = 4; // make same as gh

function resizeGrid(gW) {
    let dCHeight = window.innerHeight;
    let dCWidth = window.innerWidth;
    let dC = Math.min(dCHeight, dCWidth)*0.8

    divContainer.style.height = `${dC}px`;
    divContainer.style.width = `${dC}px`;

    for (let i = 0; i < gW; i++) {
        let div = document.createElement("div");
        div.classList.toggle("gridColumn")
        divContainer.appendChild(div);
        for (let j = 0; j < gW; j++) {
            let div2 = document.createElement("div");
            div2.classList.toggle("gridCell")
            div2.style.height = `${-3+(dC)/gW}px`;
            div2.style.width = `${-3+(dC)/gW}px`;
            div.appendChild(div2);        
        }
    }
}

resizeGrid(gridWidth);

let dimension = document.querySelector(".slider");
let dimensionText = document.getElementById("text")
console.log(dimensionText.textContent)
dimension.addEventListener("change", () => {
    dimensionText.textContent = `Grid size: ${dimension.value}x${dimension.value}`;
    console.log(dimensionText.textContent);
    divContainer.innerHTML = "";
    resizeGrid(dimension.value)});
