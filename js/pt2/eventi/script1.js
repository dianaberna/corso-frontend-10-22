console.log("sono nello script 1")
alert("sono fuori dell'event listener")


window.addEventListener("load", function () { // load = dopo la fine caricamento 

	console.log("siamo nell'event listener del load nel file script1");
    alert("sono dentro l'event listener")
    document.getElementById("selezionami").style.backgroundColor = "red"
}) 
