window.addEventListener("load", function(){
    let pulsante = document.getElementById("bottone")
    pulsante.addEventListener("click", function(){
        console.log(inputText.value)
        modificabile.style = inputText.value
    })
    let inputText = document.getElementById("inputText")
    let modificabile = document.getElementById("modificabile")
    
})
