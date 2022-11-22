window.addEventListener("load", function () {
    let StileQuadrato = document.getElementById("quadrato").style;
    StileQuadrato.cssText ="margin: 2rem; width: 400px; height: 400px; background-color: yellow";
    document.getElementById("cambio").style.width = "500px";
    document.getElementById("cambio").value = StileQuadrato.cssText;
    document.getElementById("aggiornaStile").addEventListener("click", function () {
            StileQuadrato.cssText = document.getElementById("cambio").value;
        });
});
