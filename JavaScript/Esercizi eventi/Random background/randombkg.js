let divColor = document.createElement("div");
divColor.id = "color";
document.body.appendChild(divColor);

function randomColor() {
    let green = Math.floor(Math.random() * 255);
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let bkgColor = `rgb(${red}, ${green}, ${blue})`;
    let divColorNumbers = document.createTextNode(bkgColor);
    divColor.appendChild(divColorNumbers);
    this.document.body.style.backgroundColor = bkgColor;
}

window.addEventListener("load", function () {
    randomColor();
});
