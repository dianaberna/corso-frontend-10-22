window.addEventListener("load", function () {
    
   
        for (let i=0; i<10;i++){
            document.getElementById(i).addEventListener("click", function () {
                
                document.getElementById("visualizza").value+= Number(document.getElementById(i).textContent)
            })
        }
        
        document.getElementById("+").addEventListener("click", function () {
                
            document.getElementById("visualizza").value+= document.getElementById("+").textContent
        })
        document.getElementById("/").addEventListener("click", function () {
                
            document.getElementById("visualizza").value+= document.getElementById("/").textContent
        })
        document.getElementById("*").addEventListener("click", function () {
                
            document.getElementById("visualizza").value+= document.getElementById("*").textContent
        })
        document.getElementById("-").addEventListener("click", function () {
                
            document.getElementById("visualizza").value+= document.getElementById("-").textContent
        })

        document.getElementById(".").addEventListener("click", function () {
                
            document.getElementById("visualizza").value+= document.getElementById(".").textContent
        })
     
    document.getElementById("=").addEventListener("click", function () {

        let valore= eval(document.getElementById("visualizza").value)
        document.getElementById("visualizza").value=valore
        valore=0

})

    
});