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
