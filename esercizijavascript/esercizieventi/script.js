






window.addEventListener("load", function () {  

   let red = Math.floor(Math.random() * 255)
   let green= Math.floor(Math.random() * 255)
   let blue= Math.floor(Math.random() * 255)

   let redtext= red.toString();
   let greentext= green.toString();
   let bluetext= blue.toString();
   console.log (redtext)

   console.log(red, green, blue)
	console.log ("il colore è " + red)

    document.body.style.backgroundColor = 

   let title= document.createElement ("h1")
   let titletext= document.createTextNode ("rgb"+" "+redtext+" "+greentext+" "+bluetext)
   title.appendChild(titletext)
   document.body.appendChild (title)

   
}) 


   


