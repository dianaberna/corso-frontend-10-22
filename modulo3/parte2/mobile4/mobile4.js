const body = document.body;

function creaElemento({tipo, posizione, contenuto, classe, attributi, stile, id}) {

    let nuovoElemento = document.createElement(tipo);

    if (posizione) {
        posizione.appendChild(nuovoElemento)
    }

    if (classe) {
        nuovoElemento.classList = classe
    }

    if (contenuto) {
        let contenutoElemento = document.createTextNode(contenuto);
        nuovoElemento.appendChild(contenutoElemento)
    }

    if(id) {
        nuovoElemento.id = id
    }

    if (attributi) {
        if (attributi.src) {
            nuovoElemento.src = attributi.src
        }
        // if (attributi.alt) {
        //     nuovoElemento.alt = attributi.alt
        // }
    }

    if (stile) {
        nuovoElemento.style.backgroundImage = attributi.url
    }

    // RICORDATI IL RETURN :'(
    return nuovoElemento
}

let mainContainer = creaElemento({tipo: 'div', classe: 'main-container', posizione: body})

let titoloPagina = creaElemento({tipo: "h1", posizione: mainContainer, contenuto: "Sally's music"})

let numeroCanzone = creaElemento({tipo: 'p', posizione: mainContainer, classe: 'number-of', contenuto: '20 of 321'})

let wrapperContenitoreAlbum =  creaElemento({tipo: 'div', classe: 'wrapper', posizione: mainContainer})
let contenitoreAlbum =  creaElemento({tipo: 'div', classe: 'd-flex', posizione: wrapperContenitoreAlbum})


let canzoniArray = [
    {
        url: "url(./images/album1.jfif)",
        titleSong: 'canzone x',
        artistSong: 'artista x'
    },
    {
        url: "url(./images/nirvana.png)",
        titleSong: 'canzone x nirvana',
        artistSong: 'artista x nirvana'
    },
    {
        url: "url(./images/Tame-Impala.jpeg)",
        titleSong: 'canzone x tame impala',
        artistSong: 'artista x impala'
    }
]


for (let i = 0; i < canzoniArray.length; i++) {
    creaElemento({tipo: 'div', classe: 'rettangolo overflow-hidden', posizione: contenitoreAlbum, attributi: {url: canzoniArray[i].url}, stile: {url: canzoniArray[i].url}})
}

let contenitoreTesti = creaElemento({tipo: 'div', classe: 'contenitore-testi-flex', posizione: wrapperContenitoreAlbum})

for (i=0; i<canzoniArray.length; i++) {
    let contenitoreTesto = creaElemento({tipo: 'div', classe: 'contenitore-testo', posizione: contenitoreTesti})
    creaElemento({tipo: 'h2', posizione: contenitoreTesto, contenuto: canzoniArray[i].titleSong});
    creaElemento({tipo: 'h3', posizione: contenitoreTesto, contenuto: canzoniArray[i].artistSong});
}


let controlsComands = creaElemento({tipo: 'div', posizione: mainContainer, classe: 'control-comands'})
creaElemento({tipo: 'p', posizione: controlsComands, contenuto: '00:34'});

const arrayComandi = [
    {
        src: './images/prev.png',
        id: 'prev'
    }, 
    {
        src: './images/play.png',
        id: 'current'
    },
    {
        src: './images/next.png',
        id: 'next'
    }
]

for (let i=0; i < arrayComandi.length; i++) {
    creaElemento({tipo: 'img', posizione: controlsComands, attributi: {src: arrayComandi[i].src}, id: arrayComandi[i].id})
    
}

creaElemento({tipo: 'p', posizione: controlsComands, contenuto: '03:34'});


let otherControls = creaElemento({tipo: 'div', classe: 'other-controls', posizione: mainContainer})

let arrayAltriComandi = [
    {
        src: './images/random.png'
    },
    {
        src: './images/song.png'
    },
    {
        src: './images/album.png'
    }
]

for (let i=0; i < arrayAltriComandi.length; i++) {
    creaElemento({tipo: 'img', posizione: otherControls, attributi: {src: arrayAltriComandi[i].src}})
}



const canzoniScorrere = document.querySelectorAll(".rettangolo");
const canzoniContainer = document.querySelector(".d-flex");
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')



let wrap = document.querySelector(".d-flex"),
    buttonPrev = document.querySelector("#prev"),
    buttonNext = document.querySelector("#next"),
    itemWidth = document.querySelectorAll(".rettangolo")[0].clientWidth;

let toggle = document.querySelectorAll(".slider__toggle"),
    items = document.querySelectorAll(".item");

let position = 0;
let currentDot = 0;

// showSlide(wrap, 0, 0);

// function showSlide(elem, pix, n) {
//   position += pix;
//   currentDot += n;
  
//   if (position > 0) { 
//     position = -elem.clientWidth + pix;
//     currentDot = toggle.length - 1;
//   } else if (position < -elem.clientWidth - pix) {
//     position = 0;
//     currentDot = 0;
//   }
//   elem.style.transform = "translateX(" + position +"px)";
//   toggle.forEach((item) => item.classList.remove("active"));
//   toggle[currentDot].classList.add("active");
// }

buttonNext.addEventListener("click", function() {
  showSlide(wrap, -itemWidth, 1); 
})

buttonPrev.addEventListener("click", function() {
  showSlide(wrap, itemWidth, -1); 
})

for(let i = 0; i < items.length; i++) {
  toggle[i].addEventListener("click", function() {
    position = (-items[i].clientWidth * i);
    currentDot = i;
    wrap.style.transform = "translateX(" + position + "px)";
    
    toggle.forEach((item) => item.classList.remove("active"));
    toggle[currentDot].classList.add("active");
  })
}