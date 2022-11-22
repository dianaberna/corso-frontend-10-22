window.addEventListener("load", function(e) {
    let color1 = Math.random() * 255;
    let color2 = Math.random() * 255;
    let color3 = Math.random() * 255;

    let col1 = Math.floor(color1);
    let col2 = Math.floor(color2);
    let col3 = Math.floor(color2);

    // document.body.style.backgroundColor = `rgb(${col1} , ${col2} , ${col3})`;
    document.body.style.backgroundColor =
        "rgb" + "(" + col1 + "," + " " + col2 + "," + " " + col3 + ") ";

    let span = document.getElementById("color");
    let spatext = document.createTextNode(document.body.style.backgroundColor);
    span.appendChild(spatext);
});