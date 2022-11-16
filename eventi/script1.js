window.addEventListener("load", function () {
   let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let rgb= "rgb("+r+","+g+","+b+")"
    console.log(rgb)
    document.body.style.backgroundColor = rgb
    document.body.style.display="flex"
    document.body.style.justifyContent="center"
    document.body.style.alignItems="center"
    document.body.style.alignContent="center"
    document.body.style.height="100vh"
    document.body.style.width="100vw"
    let visualizza=document.createElement("div")
    visualizza.className="colore"
    visualizza.style.backgroundColor="white"
    visualizza.style.color="black"
    visualizza.style.maxWidth="300px"
    visualizza.style.fontSize="30px"
    let testo=document.createTextNode(rgb)
    visualizza.appendChild(testo)
    document.body.appendChild(visualizza)

  });