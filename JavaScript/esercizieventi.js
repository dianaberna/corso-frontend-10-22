let divColor = document.createElement("div");
divColor.id = "colors";
document.body.appendChild(divColor);

let green = Math.trunc(Math.random() * 255);
let red = Math.trunc(Math.random() * 255);
let blue = Math.trunc(Math.random() * 255);
let random = `rgb (${red}, ${blue}, ${green})`;
let divColorNumbers = document.createTextNode(random);
divColor.appendChild(divColorNumbers);

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

window.addEventListener("load", function () {
    changeBackgroundColor(`rgb (${red}, ${blue}, ${green})`);
});
