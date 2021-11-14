window.onload = function() {

    const randomValues = document.getElementsByClassName("randomValues")
    const reverseValues = document.getElementsByClassName("reverseValues")
    const przel = document.getElementsByClassName("przel")
    const ukryj = document.getElementsByClassName("ukryj")

    for(let i=0 ; i<randomValues.length ; i++){
        randomValues[i].value = (Math.random()*100+1)
    }
    for(let i=0 ; i<reverseValues.length ; i++){
        reverseValues[i].value = reverseValues.length-i
    }
    for(let i=0 ; i < przel.length ; i++){
        przel[i].onclick = () =>{
            ukryj[i].classList.toggle("hidden")
        }
    }
   

}