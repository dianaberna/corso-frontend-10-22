let foote = document.createElement("footer")
document.body.appendChild(foote);

let divFoot = document.createElement("div")
divFoot.className = "foot"
foote.appendChild(divFoot)

let descr = document.createElement("div")
descr.className = "descr-foot"
divFoot.appendChild(descr)

let flexCont = document.createElement("div")
flexCont.className = "flex-container"
descr.appendChild(flexCont)


let item = document.createElement("div")
item.className = "flex-item"
flexCont.appendChild(item)

let logo = document.createElement("div")
logo.className = "logo-foot"
item.appendChild(logo)

let ancor = document.createElement("a")
ancor.href = "#"
logo.appendChild(ancor)

let img = document.createElement("img")
img.src = "../Coffe-Page/img/logo-footer.png"
img.alt = "Logo Sito"
ancor.appendChild(img)

let pTag = document.createElement("p")
let pTesto = document.createTextNode("Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi")
pTag.appendChild(pTesto)
logo.appendChild(pTag)


// Social icon Insta
let soci = document.createElement("div")
soci.className = "social"
logo.appendChild(soci)

let ancor2 = document.createElement("a")
ancor2.href = "#"
soci.appendChild(ancor2)

let img2 = document.createElement("img")
img2.src = "../Coffe-Page/img/icons_instagram-fill.png"
img2.alt = "instagram social icon"
ancor2.appendChild(img2)


//Social icon twitter
let divSocial = document.createElement("div")
divSocial.className = "social"
logo.appendChild(divSocial)

let ancorTw = document.createElement("a")
ancorTw.href = "#"
divSocial.appendChild(ancorTw)

let img3 = document.createElement("img")
img3.src = "../Coffe-Page/img/icons_twitter-fill.png"
img3.alt = "Twitter social icon"
ancorTw.appendChild(img3)

//Social icon Facebook
let divSocialFace = document.createElement("div")
divSocialFace.className = "social"
logo.appendChild(divSocialFace)

let ancorFace = document.createElement("a")
ancorFace.href = "#"
divSocialFace.appendChild(ancorFace)

let img4 = document.createElement("img")
img4.src = "../Coffe-Page/img/facebook.png"
img4.alt = "Facebook social icon"
ancorFace.appendChild(img4)

let flitem = document.createElement("div")
flitem.className = "flex-item"
flexCont.appendChild(flitem)

let info = document.createElement("div")
info.className = "info"
flexCont.appendChild(info)

let li = document.createElement("li")
li.className = "info-titolo"
info.appendChild(li)

let lianco = document.createElement("a")
lianco.href = ""
lianco.text = "Company"
li.appendChild(lianco)


