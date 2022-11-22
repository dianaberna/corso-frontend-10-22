import creaDom from "./dom.js";

window.addEventListener("load", function () {
    creaDom();
});

/*

Non abbiamo mai visitato la pagina, quindi i cookie sono vuoti. -> finché non aggiungo un nuovo task posso far nulla

(al caricamento della pagina se il cookie contiene già un elenco di task li carica, 
    altrimenti carica una lista vuota) -> la lista dei task è il dato che salviamo nei cookie 

Aggiungiamo un nuovo task alla nostra lista dei task
    1) lo inseriamo nel dom e in un array

    2) lo inseriamo nell'elenco lista dei task che andremo a salvare nei cookie

*/
