import { setCookie, getCookie } from "./cookie.js";

let listaTask = [];

const creaTask = (contenuto) => {
    let lista = document.getElementsByTagName("ul")[0];
    let nuovoTask = document.createElement("li");
    let testo = document.createTextNode(contenuto);

    // se il task è già presente nell'array nel cookie non dobbiamo ricaricarlo e risettare il cookie
    // il contenuto è già presente nell'array??
    let indiceContenuto = listaTask.indexOf(contenuto); // se -1 allora il valore non è presente, altrimenti è presente
    console.log(indiceContenuto);
    if (indiceContenuto == -1) {
        // l'elemento non è prensente nell'array -> creo il dom e lo aggiungo all'array
        // aggiorno array elenco task
        listaTask.push(contenuto);
        // carico l'array nei cookie (nome del cookie è todolist)
        setCookie("todolist", listaTask);
    }
    // l'elemento è presente nell'array -> creo il dom ma NON lo aggiungo di nuovo all'array

    let bottoneCancella = document.createElement("input");
    bottoneCancella.type = "button";
    bottoneCancella.value = "x";
    bottoneCancella.addEventListener("click", function () {
        nuovoTask.remove(); // rimuove dal dom
        listaTask.splice(indiceContenuto, 1); // rimozione dall'elenco dei task (dall'array dei task)
        setCookie("todolist", listaTask);
    });
    nuovoTask.appendChild(testo);
    nuovoTask.appendChild(bottoneCancella);
    lista.appendChild(nuovoTask);
};

const aggiungiTask = () => {
    let inputTestuale = document.getElementById("inputTestuale");
    // controllo se il valore dell'input testuale è vuoto così da non aggiungere un nuovo task
    if (inputTestuale.value == "") {
        return;
    }
    creaTask(inputTestuale.value);
    inputTestuale.value = "";
};

const creaDom = () => {
    let inputTesuale = document.createElement("input");
    inputTesuale.id = "inputTestuale";
    let inputButton = document.createElement("input");
    inputButton.type = "button";
    inputButton.addEventListener("click", function () {
        // aggiungere il task newl dom e aggiornare l'elenco dei task nei cookie
        aggiungiTask();
    });
    inputButton.value = "Aggiungi";
    let lista = document.createElement("ul");
    document.body.appendChild(inputTesuale);
    document.body.appendChild(inputButton);
    document.body.appendChild(lista);

    // nei cookie c'è già una lista dei task? se no, ok così...
    // se si, dobbiamo creare tanti task quanti elementi sono presenti nell'elenco del cookie todolist
    if (getCookie("todolist")) {
        let listaCookie = getCookie("todolist").split(",");
        listaTask = listaCookie;
        for (let i = 0; i < listaTask.length; i++) {
            creaTask(listaTask[i]);
        }
    }
};

export default creaDom;
