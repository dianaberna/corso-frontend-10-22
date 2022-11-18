
function random_bg_color() {
    let x =
    Math.floor(Math.random()*256);
    let y = 
    Math.floor(Math.random()*256);
    let z =
    Math.floor(Math.random()*256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")"
        console.log(bgColor);

        document.body.style.background = bgColor;
        return bgColor
}
window.addEventListener("load", function(){
let span = document.getElementById("span")
let cambioBg = random_bg_color();
let textSpan = document.createTextNode(cambioBg)
span.appendChild(textSpan)
})