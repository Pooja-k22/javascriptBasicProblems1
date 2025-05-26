
function display(num){
    result.value +=num

}
function clearAll(){
    result.value =''
}

function Delete(){
    result.value= result.value.slice(0,-1)
}

function Equal(){
try {
    result.value = eval(result.value)
} catch (error) {
    result.value='error'
    setTimeout(()=>{
        result.value=""
    },1000)
    
}
}