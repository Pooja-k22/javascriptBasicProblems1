console.log(`----------------------`);
// hw
/*       *
        * *
       * * *
      * * * *
     * * * * *
      * * * *
       * * *
        * *
         *
             */ 


for(row=1;row<=9;row++){
    str="";

    if(row<=5){                     
        for(sp=5;sp>row;sp--){      //space
            str=str+" ";
        }
        for(c1=1;c1<=row;c1++){     //star
            str=str+"* ";
        }
       
    }
    else{
        for(sp=1;sp<=row-5;sp++){      //space
            str= str+" "
        }
        for(c2=1;c2<=10-row;c2++){     //star
            str=str+"* "
        }
        
    }
    console.log(str);
    }

console.log(`----------------------`);

    //  * * * * *
    //  *       *
    //  *       *
    //  *       *
    //  * * * * *  

    for(r=1;r<=5;r++){
        str=""
        for(c=1;c<=5;c++){
            if(r==1 || r==5 || c==1 || c==5 ){
                str+="* "
            }
            else{
                str+="  "
            }
        }
        console.log(str);
        
    }

    console.log(`----------------------`);
    // 1
    // 0 1
    // 1 0 1
    // 0 1 0 1

    for(r=1;r<=4;r++){
        str=""
        for(c=1;c<=r;c++){
            if((r+c)%2==0  ){
                str+="1 "
            }
            else{
                str+="0 "
            }
        }
        console.log(str);
        
    }
    
    console.log(`----------------------`);
    // * * * * *
    //   *   *
    //     *
    //   *   *
    // * * * * *

    for(r=1;r<=5;r++){
        str=""
        for(c=1;c<=5;c++){
            if(r==1 || r==5 || r==c || r+c==6){
                str+="* "
            }
            else{
                str+="  "
            }
        }
        console.log(str);
        
    }

    //                 11
    //              12 13 14
    //           15 16 17 18 19
    //        20 21 22 23 24 25 26
    //     27 28 29 30 31 32 33 34 35
    n=11
    for(r=1;r<=5;r++){
        str=''
        for(sp=1;sp<=5-r;sp++){
            str+="   "
        }
        for(c=1;c<=2*r-1;c++){
            str+=n+" "
            n++
        }
        console.log(str);
        
    }