function check(){

    const time= new Date()
    console.log(time);

    let hour=time.getHours()
    console.log(hour);

    let min=time.getMinutes()
    console.log(min);

    let sec=time.getSeconds()
    console.log(sec);

    result.innerHTML=`${hour} : ${min} : ${sec} : ${hour<12 ? 'AM':'PM'}`

    setTimeout(()=>{
        check()
    },1000)

}
check()