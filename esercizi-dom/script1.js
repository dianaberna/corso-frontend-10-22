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
}
random_bg_color();
