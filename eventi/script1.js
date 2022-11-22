window.addEventListener("load", function () {
   let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let rgb= "rgb("+r+","+g+","+b+")"
    console.log(rgb)
    sBody=document.body.style
    sBody.cssText='display:flex; justify-Content:center; align-items:center; height:100vh; width:100vw; align-Content:center;'
    sBody.backgroundColor = rgb
    let visualizza=document.createElement("div")
    visualizza.className="colore"
    sVis=visualizza.style
    sVis.cssText='background-color: white; color: black; max-width:300px; font-size: 30px; padding: 15px;'
    let testo=document.createTextNode(rgb)
    visualizza.appendChild(testo)
    document.body.appendChild(visualizza)

  });
