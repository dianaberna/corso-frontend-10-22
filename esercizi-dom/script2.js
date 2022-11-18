window.addEventListener("load", function(){

    let pulsante = document.getElementById("bottone")
    pulsante.addEventListener("click", function(){
        console.log(inputText.value)
        modificabile.style = inputText.value
    })

    let inputText = document.getElementById("inputText")
    inputText.value = "margin: 2rem; width: 400px; height: 400px; background-color: yellow;"
    let modificabile = document.getElementById("modificabile")
    modificabile.style = inputText.value
})
