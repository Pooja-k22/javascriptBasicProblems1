function calculation(){


    let p = Number(principal.value)
    let r = Number(interest.value/100)
    let y = Number(year.value)
    let totalAmount = document.getElementById("total-amt")

    

    if(isNaN(p) || isNaN(r) || isNaN(y) || p<=0 || r<0 || y<=0 ){
        totalAmount.innerHTML = "Invalid input"
        totalAmount.style.color="red"
    }
    else{
        const result = p* Math.pow((1+ r/1), 1*y)
        totalAmount.innerHTML = result
        totalAmount.style.color="green"
    }
        
}