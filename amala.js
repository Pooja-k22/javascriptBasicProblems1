//n=239
 n=239
    while (n>=10) {
        s=0
        while (n>0) {
            r=n%10 //9 3 2  //4 1
            s+=r // 9 12 14 // 4 5
            n=parseInt(n/10)  //1 0
        }
        n=s //n=14 n=5
    }
    
   console.log(n); //5
 
 
 