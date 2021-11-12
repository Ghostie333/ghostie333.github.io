window.onload = function() {

    const randomValues = document.getElementsByClassName("randomValues")
    const reverseValues = document.getElementsByClassName("reverseValues")
    const przel = document.getElementById("przel")
    const ukryj = document.getElementById("ukryj")

    for(let i=0 ; i<randomValues.length ; i++){
        randomValues[i].value = (Math.random()*100+1)
    }
    for(let i=0 ; i<reverseValues.length ; i++){
        reverseValues[i].value = reverseValues.length-i
    }

    przel.onclick = () =>{
        ukryj.classList.toggle("hidden")
    }

}