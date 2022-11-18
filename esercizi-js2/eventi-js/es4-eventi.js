/* Realizzare una pagina web con js di una calcolatrice.
PS. può tornare molto utile la funzione eval() 
Come prima versione lasciate l’input testuale disabilitato dove vengono mostrati numeri/operazioni/risultati. 
Una seconda versione potrebbe essere quella di accettare sia operazioni tramite pulsanti che scritte nell’input testuale. */


function restituisciValore(e){
  let i = document.getElementById("input");
  let valore = i.value = i.value + e.target.value;
  return valore;
}

function restituisciRisultato(){
  let i = document.getElementById("input");
  let risultato = i.value = eval(i.value);
  return risultato;
}

function cancellaRisultato(){
  let i = document.getElementById("input");
  let cancella = i.value = "";
  return cancella;
}


window.addEventListener("load", function(){

  let n0 = document.getElementById("n0");
  n0.addEventListener("click", restituisciValore);

  let n1 = document.getElementById("n1");
  n1.addEventListener("click", restituisciValore);

  let n2 = document.getElementById("n2");
  n2.addEventListener("click", restituisciValore);

  let n3 = document.getElementById("n3");
  n3.addEventListener("click", restituisciValore);

  let n4 = document.getElementById("n4");
  n4.addEventListener("click", restituisciValore);

  let n5 = document.getElementById("n5");
  n5.addEventListener("click", restituisciValore);

  let n6 = document.getElementById("n6");
  n6.addEventListener("click", restituisciValore);

  let n7 = document.getElementById("n7");
  n7.addEventListener("click", restituisciValore);

  let n8 = document.getElementById("n8");
  n8.addEventListener("click", restituisciValore);

  let n9 = document.getElementById("n9");
  n9.addEventListener("click", restituisciValore);

  let punto = document.getElementById("punto");
  punto.addEventListener("click", restituisciValore);

  let divisione = document.getElementById("divisione");
  divisione.addEventListener("click", restituisciValore);

  let moltiplicazione = document.getElementById("moltiplicazione");
  moltiplicazione.addEventListener("click", restituisciValore);

  let sottrazione = document.getElementById("sottrazione");
  sottrazione.addEventListener("click", restituisciValore);

  let addizione = document.getElementById("addizione");
  addizione.addEventListener("click", restituisciValore);

  let risultato = document.getElementById("risultato");
  risultato.addEventListener("click", restituisciRisultato);

  let cancella = document.getElementById("cancella");
  cancella.addEventListener("click", cancellaRisultato);

});