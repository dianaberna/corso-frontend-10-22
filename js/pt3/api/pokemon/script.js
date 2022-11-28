window.addEventListener("load", () => {
    recuperaDati();
})

async function recuperaDati(){
    let pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/ditto`
    );
    let pokemonData = await pokemonResponse.json();
    console.log(pokemonData)
    let divStampa = document.getElementById("pokemon");
    let nomeTitolo = document.createElement("h1");
    let nomeTesto = document.createTextNode(pokemonData.name)
    nomeTitolo.appendChild(nomeTesto)
    divStampa.appendChild(nomeTitolo)
    let imgFront = document.createElement("img")
    imgFront.src = pokemonData.sprites.front_default;
    divStampa.appendChild(imgFront)
    let backFront = document.createElement("img")
    backFront.src = pokemonData.sprites.back_default;
    divStampa.appendChild(backFront)
}