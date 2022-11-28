window.addEventListener("load", () => {    
    recuperaDatiMeteo();
});

async function recuperaDatiMeteo() {
    console.log("funzione recuperaDatiMeteo");
    console.log("prima della fetch")
    let risultato = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&hourly=temperature_2m,rain&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin"
    );
    let risultatoJson = await risultato.json();
    console.log("dopo la fetch")
    console.log(risultatoJson);
    console.log(risultatoJson.hourly);
    console.log("creo il dom")
    let tabella = document.createElement("table");
    let rigaOrario = document.createElement("tr");
    for (let i = 0; i < 24; i++) {
        let colonna = document.createElement("td");
        let testo = document.createTextNode(risultatoJson.hourly.time[i]);
        /* console.log(risultatoJson.hourly.time[i]) */
        colonna.appendChild(testo);
        rigaOrario.appendChild(colonna);
    }
    tabella.appendChild(rigaOrario);
    let rigaPioggia = document.createElement("tr");
    for (let i = 0; i < 24; i++) {
        let colonna = document.createElement("td");
        let testo = document.createTextNode(risultatoJson.hourly.rain[i]);
        /* console.log(risultatoJson.hourly.rain[i]) */
        colonna.appendChild(testo);
        rigaPioggia.appendChild(colonna);
    }
    tabella.appendChild(rigaPioggia);
    document.body.appendChild(tabella);
}
