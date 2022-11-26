window.addEventListener("load", function(){
let schermo = document.getElementById("screen")
console.log(schermo.value)  
let numeri = document.getElementById("numeri-simboli")
numeri.addEventListener("click", function(){
    numeri.value = schermo

})

})


