function eligibility(){
        
    console.log(age.value);
    if(!age.value){ //please enter a value -blue
        pop.innerHTML='please enter a value -blue'
        pop.style.color='blue'
    }
    else{
        if(age.value>=18){ // eligible-green
            pop.innerHTML='eligible'
            pop.style.color='green'
        }
        else if(age.value<18){ //not eligible -red
            pop.innerHTML='not eligible'
            pop.style.color='red'
        }
        else{  // not a number -invalid input-orange
             pop.innerHTML='invalid input'
             pop.style.color='orange'
        }
    }
}

