//        *
//      *   *
//    *       *
//  * * * * * * *

for(rw=1;rw<=4;rw++){
    str=""
    for(cl=1;cl<=7;cl++){
        if(rw+cl==5 || cl-rw==3 || rw==4 ){
            str=str+"*"
            
            
        }
       
        else {
            str=str+" "
        }
         
    }
    console.log(str);
    
}

console.log(`-------------------`);

 
//    *
//   ***
//  *****

for(r=1;r<=3;r++){
    str=''

    for(c=3;c>r;c--){  //for space
        str=str+" "
    }

    for(c=1;c<=2*r-1;c++){   // for star
        str=str+"*"
    }
    console.log(str);
    
    
}
console.log(`-------------------`);

//   *****
//    ***
//     *


for(r=1;r<=3;r++){
    str=''

    for(c=1;c<=r;c++){  //for space
        str=str+" "
    }

    for(c=1;c<=2*(3-r)+1;c++){   // for star
        str=str+"*"
    }
    console.log(str);
    
    
}

console.log(`-------------------`);

//   * * * *
//    * * *
//     * *
//      *

for(r=1;r<=4;r++){
    str=''
    for(c=1;c<r;c++){  //for space
        str=str+" "
    }
    for(c=4;c>=r;c--){  //for star
        str=str+"* "
    }
    console.log(str);
    
}

console.log(`-------------------`);
/*
     *******
      *   *
       * *
        *   */
     for(r=1;r<=4;r++){
        str=''
        
        for(c=1;c<=7;c++){  //for star
            if (r==1 || r==c || r+c==8) {
                str=str+"* "
            }
            else{
                 str=str+"  "

            }
        }
        console.log(str);
        
    }

console.log(`-------------------`);
/*
              *
             **
            ***
           ****
            ***
             **
              *   */


            for(r=1;r<=7;r++){
            str=''
            if (r<=4) {
                for(c=1;c<=4-r;c++){
                    str=str+"  "
                }
                for(c2=1;c2<=r;c2++){
                    str=str+"* "

                }
            }
            
            else{
                for(c=1;c<=r-4;c++){
                    str=str+"  "
                } 
                for(c=1;c<=8-r;c++){
                    str=str+"* "
                } 
    
                }
            
            console.log(str);
            
        }     
        
        console.log(`-------------------------`);
 /* 
         *
        ***
       *****
      *******
       *****
        ***
         *        */

        for(r=1;r<=7;r++){
            str=""
            if(r<=4){
            for(sp=1;sp<=4-r;sp++){
                str+=" "
            }
            for(c1=1;c1<=2*r-1;c1++){
                str+="*"
            }
        }
        else{
            for(sp=1;sp<=r-4;sp++){
                str+=" "
            }
            for(c1=1;c1<=15-2*r;c1++){
                str+="*"
            }
        }
        console.log(str);
        
        }

        console.log('-----------------------');
        /*
        10987
        456
        32
        1  */

        n=10
        for(r=4;r>=1;r--){
            str=""
            for(c=1;c<=r;c++){
                str+=n+" "
                n--
            }
            console.log(str);
            
        }

        console.log('----------------');
    /*     4*4*4*4
           3*3*3
           2*2
           1
           1
           2*2
           3*3*3
           4*4*4*4         */
        
        