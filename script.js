// Define element for the number of square in each row and height
let singleSquare = 16;
// Variable for the total number of square
let totalSquare = singleSquare * singleSquare;

// DOM selector for the body
let body = document.querySelector("body");
body.style.width = "100%";
body.style.height = "100%";

// Create the div for header
let header = document.createElement("div");
header.className = "main-header";
header.style.background = "	#FAEBD7";

// Create the container so that it will only take 80% of the width
let container = document.createElement("div");
container.className = "container";
container.style.width = "80%";
container.style.margin = "0 auto";
container.style.padding = "5%";

// Create the dom for the h1 tag
let title = document.createElement("h1");
title.textContent = "Etch-A-sketch";
title.style.textAlign = "center";
container.appendChild(title);

header.appendChild(container);

body.appendChild(header);

// Create the button div using DOM
let buttonContainer = document.createElement("div");
buttonContainer.className = "button";
buttonContainer.style.textAlign = "center";
let button = document.createElement("button");
button.textContent = "Reset";
button.style.fontSize = "20px";
button.style.padding = "0.5%";
button.style.width = "100%"
buttonContainer.appendChild(button);
body.appendChild(buttonContainer);

// Create a section element that will be use as a child against the body
let section = document.createElement("section");
section.style.width = "50%";
section.style.height = "58%";
section.style.border = "1px solid black";
section.style.margin = "5% auto";

createBox(singleSquare, totalSquare);


// DOM selector for the boxes so that we can change the color
let boxes = document.querySelectorAll(".colorChangeBoxes");
boxes.forEach(box => box.addEventListener("mouseover", changeColor));

function changeColor(e){
    // this keyword is referring to the box in event listener
    this.style.background = `rgb(0, 0, 0)`;
}

button.addEventListener("click", reset);

function reset(e){
    let boxes = document.querySelectorAll(".colorChangeBoxes");
    boxes.forEach(box => box.style.background = "white");
    boxes.forEach(box => box.parentNode.removeChild(box));
    singleSquare = Number(prompt("How many square per side?"));
    totalSquare = singleSquare * singleSquare;
    createBox(singleSquare, totalSquare);
}

function createBox(singleSquare, totalSquare){
    // Creating multiple boxes of div
    for (let i = 0; i < totalSquare; i++){
        let boxes = document.createElement("div");
        boxes.className = "colorChangeBoxes";
        boxes.style.float = "left";
        // Calculating of width and height so that it can fit in the square
        let width = 100/singleSquare;
        let height = 100/singleSquare;
        boxes.style.width = width + "%";
        boxes.style.height =  height+"%";
        // Append the box dom into section
        section.appendChild(boxes);
    }

    // Append section along with the multiple boxes into body
    body.appendChild(section);

    // DOM selector for the boxes so that we can change the color
    let boxes = document.querySelectorAll(".colorChangeBoxes");
    boxes.forEach(box => box.addEventListener("mouseover", changeColor));

    button.addEventListener("click", reset);

}