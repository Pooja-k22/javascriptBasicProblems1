//         *
//       *   *
//     *   *    *
//   *   *    *    *

for(r=1;r<=4;r++){
    str=''

    for(c=1;c<=4-r;c++){  //for space
        str=str+" "
    }

    for(c=1;c<=r;c++){   // for star
        str=str+"* "
    }
    console.log(str);
    
    
}

// method 2
console.log(`----------------------`);


for(r=1;r<=4;r++){
    str=''

    for(sp=4;sp>r;sp--){  //for space
        str=str+" "
    }

    for(c=1;c<=r;c++){   // for star
        str=str+"* "
    }
    console.log(str);
    
    
}

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
    str=""

    if(row<=5){
        for(sp=5;sp>row;sp--){
            str+=" "
        }
        for(c1=1;c1<=row;c1++){
            str=str+"* "
        }
        
    }
    else{
        for(sp=1;sp<=row+1-c1;sp++){
            str+=" "
        }
        for(c2=1;c2<=10-row;c2++){
            str=str+"* "
        }
       
    }
    console.log(str);
    }
