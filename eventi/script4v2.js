window.addEventListener("load", function () {
    
   let arr=[0,1,2,3,4,5,6,7,8,9,".","/","*","-","+",]

        for (let i=0; i<arr.length;i++){
            document.getElementById(arr[i]).addEventListener("click", function () {
                
                document.getElementById("visualizza").value+= (document.getElementById(arr[i]).textContent)
            })
        }
        
        
    document.getElementById("=").addEventListener("click", function () {

        let valore= eval(document.getElementById("visualizza").value)
        document.getElementById("visualizza").value=+valore.toFixed(4)
        valore=0

})

    
});