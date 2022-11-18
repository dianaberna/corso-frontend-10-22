console.log("es1");

window.addEventListener("load", function(){
    let red = (Math.random() * 255).toFixed(0);
    let green = (Math.random() * 255).toFixed(0);
    let blue = (Math.random() * 255).toFixed(0);
    let bgColor = `rgb(${red}, ${green}, ${blue})`;
    
    document.body.style.backgroundColor = bgColor;
    
    let divColor = document.createElement("div");
    divColor.id = "color";
    divColor.innerHTML = bgColor;
    document.body.appendChild(divColor);
})

