function creaElemento(parametri) {
    let nuovoElemento = document.createElement(parametri.tipo);
    if (parametri.attributi) {
        if (parametri.attributi.src && parametri.attributi.alt) {
            nuovoElemento.src = parametri.attributi.src;
            nuovoElemento.alt = parametri.attributi.alt;
        }
    }
    if (parametri.contenuto) {
        let contenutoElemento = document.createTextNode(parametri.contenuto);
        nuovoElemento.appendChild(contenutoElemento);
    }
    if (parametri.classe != "") nuovoElemento.className = parametri.classe;
    if (parametri.posizione) {
        parametri.posizione.appendChild(nuovoElemento);
    } else {
        return nuovoElemento;
    }
}

export default creaElemento;