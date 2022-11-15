



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

//main

let main= document.createElement ("main")
document.body.appendChild (main)


let divmon= document.createElement ("div")
divmon.className = "day"
section1.appendChild(divmon)

let divtue= document.createElement ("div")
divtue.className = "day"
section1.appendChild(divtue)

let divwed= document.createElement ("div")
divwed.className = "day"
section1.appendChild(divwed)

let divthu= document.createElement ("div")
divthu.className = "day"
section1.appendChild(divthu)

let divfri= document.createElement ("div")
divfri.className = "day"
section1.appendChild(divfri)

let divsun= document.createElement ("div")
divsun.className = "day"
section1.appendChild(divsun)