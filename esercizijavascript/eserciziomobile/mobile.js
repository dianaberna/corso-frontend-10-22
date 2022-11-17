function elementi (tipo, classe, src, alt, posizione, contenuto){
    
  let elemento = document.createElement (tipo)
  
 
   if (classe){
      elemento.className= classe
   }
   if (posizione){
      posizione.appendChild (elemento)
   }
   if (src && alt){
      elemento.src= src
      elemento.alt = alt
   }
    if (contenuto){
      let testoelemento= document.createTextNode (contenuto)
      elemento.appendChild (testoelemento)
   }
  
   return elemento
}




//Header


let header= document.createElement ("header")
document.body.appendChild (header)


let div1= document.createElement ("div")
header.appendChild (div1)

let svg1= `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.70998 0.710469C6.31998 0.320469 5.68998 0.320469 5.29998 0.710469L0.70998 5.30047C0.31998 5.69047 0.31998 6.32047 0.70998 6.71047L5.29998 11.3005C5.68998 11.6905 6.31998 11.6905 6.70998 11.3005C7.09998 10.9105 7.09998 10.2805 6.70998 9.89047L2.82998 6.00047L6.70998 2.12047C7.09998 1.73047 7.08998 1.09047 6.70998 0.710469Z" fill="#161616"/></svg>`
let svg2=  `<svg
width="20"
height="22"
viewBox="0 0 20 22"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M18 2H17V1C17 0.45 16.55 0 16 0C15.45 0 15 0.45 15 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM17 20H3C2.45 20 2 19.55 2 19V7H18V19C18 19.55 17.55 20 17 20Z"
  fill="#161616"
/>
</svg>`

div1.innerHTML= svg1 + svg2;


let title= document.createElement("h1")
let titletext= document.createTextNode ("Eventi")
title.appendChild (titletext)
header.appendChild (title)

let section1 = document.createElement ("section")
section1.className= "calendar"
header.appendChild (section1)

//calendar
let arrayday = [
  {
    dayname: "MON",
    daynumber: "13",
  },
  {
    dayname: "TUE",
    daynumber: "14",
  },
  {
    dayname: "WED",
    daynumber: "15",
  },
  {
    dayname: "THU",
    daynumber: "16",
  },
  {
    dayname: "FRI",
    daynumber: "17",
  },
  {
    dayname: "SAT",
    daynumber: "18",
  },
  {
    dayname: "SUN",
    daynumber: "19",
  },
]

for (let i=0; i<arrayday.length, i++ ;) {

  let daydiv= elementi("div","day","","", section1 ,"",);
  let daytitle= elementi("h2","","","",daydiv, arrayday[i].dayname)
}



//main

let main= document.createElement ("main")
document.body.appendChild (main)

//card

let card= document.createElement ("div")
card.id= "card"
main.appendChild (card)

let heartdiv = document.createElement ("div")
heartdiv.className = "heart"
card.appendChild (heartdiv)

let heartsvg= `<svg id="heart"
width="18"
height="16"
viewBox="0 0 18 16"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M13.2188 0.0546875C12.242 0.0546875 11.3465 0.364203 10.5572 0.974656C9.80044 1.5599 9.29661 2.30532 9 2.84736C8.70339 2.30528 8.19956 1.5599 7.44282 0.974656C6.6535 0.364203 5.758 0.0546875 4.78125 0.0546875C2.05552 0.0546875 0 2.28419 0 5.24073C0 8.43481 2.5644 10.6202 6.44657 13.9285C7.10582 14.4903 7.85306 15.1271 8.62973 15.8063C8.73211 15.896 8.86359 15.9453 9 15.9453C9.13641 15.9453 9.26789 15.896 9.37027 15.8063C10.147 15.1271 10.8942 14.4903 11.5539 13.9281C15.4356 10.6202 18 8.43481 18 5.24073C18 2.28419 15.9445 0.0546875 13.2188 0.0546875Z"
  fill="black"
/>
</svg>`

heartdiv.innerHTML = heartsvg;

let cardimg= document.createElement ("img")
cardimg.className= "card-img"
cardimg.src= "cardcalendar.png"
cardimg.alt = "immagine"
card.appendChild (cardimg)

// card text

let cardtext= document.createElement ("div")
cardtext.className= "card-text"
card.appendChild (cardtext)

let cardtitle= document.createElement ("h4")
let cardtitletext = document.createTextNode ("Events")
cardtitle.appendChild (cardtitletext)
cardtext.appendChild (cardtitle)

let cardtitle2= document.createElement ("h1")
let cardtitletext2 = document.createTextNode ("National Health Movement")
cardtitle2.appendChild (cardtitletext2)
cardtext.appendChild (cardtitle2)


let cardparagraph= document.createElement ("p")
let cardparagraphtext = document.createTextNode ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae")

cardparagraph.appendChild (cardparagraphtext)
cardtext.appendChild (cardparagraph)

// card footer

let cardicons = document.createElement ("div")
cardicons.className = "card-icons"
card.appendChild (cardicons)

let leftcardicons = document.createElement ("div")
leftcardicons.className ="left-card-icons"
cardicons. appendChild (leftcardicons)

let rightcardicons = document.createElement ("div")
rightcardicons.className ="right-card-icons"
cardicons. appendChild (rightcardicons)



// card 2

let card2 = document.createElement ("div")
card2.id = "card2"
main.appendChild (card2)

let cardtext2= document.createElement ("div")
cardtext2.className= "card-text"
card2.appendChild (cardtext2)

let card2title = document.createElement ("h1")
let card2titletext = document.createTextNode ("Nearby Events")
card2title.appendChild (card2titletext)
cardtext2.appendChild (card2title)

let card2paragraph = document.createElement ("p")
card2.appendChild (card2paragraph)

let  card2paragraphtext = document.createTextNode ("110 Chan Tin Lau street, Hong Kong")
card2paragraph.appendChild (card2paragraphtext)

let card2img= document.createElement ("img")
card2img.src ="./img/map.png"
card2img.className ="card-img"
card2.appendChild (card2img)
