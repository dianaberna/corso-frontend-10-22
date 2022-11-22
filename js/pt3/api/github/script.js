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
    console.log(githubResponse);
    // converto il dato che ottengo in json -> non posso convertire il dato finché non c'è un contenuto
    let githubUser = await githubResponse.json();
    console.log(githubUser);

    let img = document.createElement("img");
    img.src = githubUser["avatar_url"];
    document.getElementById("github").appendChild(img);
    return githubUser;
}

showAvatar();
