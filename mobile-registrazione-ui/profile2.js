const divTop = document.getElementsByClassName ("top")[0];
function nodi (tipo, classe) {
    let nuovo_elemento = document.createAttribute(tipo)
    nuovo_elemento.className=(classe)
}

function elementi (tipo, classe, source, padre, contenuto, extra) {
    let nuovo_elemento = createElement(tipo)
    nuovo_elemento.className=classe
    if (source)
    nuovo_elemento.src=source
    padre.appendChild(nuovo_elemento)
    let contenutoTesto = document.createTextNode=(contenuto)
    nuovo_elemento.appendChild(contenutoTesto)
    if (extra)
    nuovo_elemento.innerHTML = extra
}

elementi("img", "", "/mobile-registrazione-ui/assets/mastercard1.png", divTop, "","")
let welcome_text = nodi ("div", "welcome-text")
document.bo
elementi("h3","h3","",welcome_text,"Hi there, welcome!","")
elementi("p","p","",welcome_text,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vestibulum augue massa sed aenean.","")
let divForm = nodi ("div","form")