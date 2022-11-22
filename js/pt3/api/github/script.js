window.addEventListener("load", ()=>{
    showAvatar();
})

async function showAvatar() {
    let username = "dianaberna";
    // fetch -> recuperare un json da un url (chiamata api)
    // await -> aspettare che il risultato sia caricato

    // let githubResponse = fetch(`https://api.github.com/users/${username}`);
    // nell'istante in cui chiamiamo la funzione fetch, l'url ci resituisce un risultato

    // l'url non ci resituisce istantamente il risultato
    // ti prometto che appena ho il risultato te lo metto a disposizione

    let githubResponse = await fetch(
        `https://api.github.com/users/${username}`
    ); 
    // stampiamo la risposta della promise 
    console.log(githubResponse);
    // converto il dato che ottengo in json -> non posso convertire il dato finché non c'è un contenuto
    let githubUser = await githubResponse.json();
    console.log(githubUser);

    // gestione dom 
    let img = document.createElement("img");
    img.src = githubUser["avatar_url"];
    document.getElementById("github").appendChild(img);
    return githubUser;
}

/*
    se togliamo await dal fetch e dal .json() il console.log di githubUser restituirà errore perché la variabile è undefined
    se togliamo l'asycn -> vscode ci notifica l'errore (se internamente ovviamente abbiamo await)
*/

/*
    fetch ( url ) -> internamente abbiamo una promessa che l'url ci restituirà il risultato 
    dato che la fetch si troverà in una funzione noi siamo obbligati a far sapere al browser
    che ci sarà un attesa nell'esecuzione 

    quando abbiamo una fetch all'interno del nostro codice l'esecuzione di tutta la pagina non si blocca
    ma è come se partisse un "ramo" che rimane in attesa del risultato 

    url -> 
*/