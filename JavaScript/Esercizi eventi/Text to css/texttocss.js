let pulsante = document.getElementById("button");
let divCss = document.getElementById("css-box");

function changeStyle() {
    let textInput = document.getElementById("input-text");
    //  console.log(textInput.value);
    divCss.style = textInput.value;
}

pulsante.addEventListener("click", changeStyle);
