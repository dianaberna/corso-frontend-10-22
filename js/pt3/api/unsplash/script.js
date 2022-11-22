window.addEventListener("load", function () {
    console.log("prima");
    loadImg();
    console.log("dopo");
});

function loadImg() {
    let ricerca = "dog";
    let id_diana = "hZRa4OdzodVlybtiMsr_HYdkAK3jMQ26SKTKiUM44QE";
    // prendiamo i primi 10
    let numeroRisultati = 10
    const url = `https://api.unsplash.com/search/photos/?query=${ricerca}&per_page=${numeroRisultati}&client_id=${id_diana}`;

    // implementazione futura -> un loop dove recuperiamo 10 foto ogni pagina, 1... 30 così da non caricare tutte le mille mila immagini subito 

    fetch(url)
        .then((response) => {
            if (response.ok) {
                /* console.log(response); */
                // response è il risultato della promise (non solo il dato che ci serve)
                return response.json(); // restituirà response.json() al then successivo
            } else alert(response.status);
        })
        .then((pippo) => { // pippo sarà proprio il valore response.json
            const imageNodes = [];
            console.log(pippo);
            for (let i = 0; i < pippo.results.length; i++) {
                /* console.log(pippo.results[i]) */
                // da qui in poi è manipolazione del dom 
                imageNodes[i] = document.createElement("img");
                imageNodes[i].className = "immmagine";
                imageNodes[i].src = pippo.results[i].urls.raw;
                const grid = document.getElementsByClassName("grid")[0];
                grid.appendChild(imageNodes[i]);
            }
        });
}
