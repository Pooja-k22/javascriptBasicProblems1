// pattern problems

/* # # # #
   # # # #
   # # # #
   # # # # */

   for(r=1;r<=4;r++){
    str=""
    for(c=1;c<=4;c++){
        str=str+"# "
    }
    console.log(str);
    
   }

   console.log(`----------------------`);
   /* #
      # #
      # # #
      # # # #  */

      for(r=1;r<=4;r++){
        str=""
        for(c=1;c<=r;c++){
            str=str+"# "
        }
        console.log(str);
        
      }
   

      console.log(`----------------------`);
      /* 1 2 3 4
         1 2 3 4
         1 2 3 4
         1 2 3 4 */

         for(r=1;r<=4;r++){
            str=""
            for(c=1;c<=4;c++){
                str=str+c+' '
            }
            console.log(str);
            
         }

    console.log(`----------------------`);
      /* 1 1 1 1 
         2 2 2 2
         3 3 3 3
         4 4 4 4 */

         for(r=1;r<=4;r++){
            str=""
            for(c=1;c<=4;c++){
                str=str+r+' '
            }
            console.log(str);
            
         }

         console.log(`----------------------`);
      /* 1 
         1 2
         1 2 3
         1 2 3 4 */

         for(r=1;r<=4;r++){
            str=""
            for(c=1;c<=r;c++){
                str=str+c+' '
            }
            console.log(str);
            
         }

         console.log(`----------------------`);
         /* + + + +
            + + +
            + +
            +    */

        for(r=4;r>=1;r--){
            str=""
            for(c=1;c<=r;c++){
                str=str+ "+ "
            }
            console.log(str);
            
        }    
        console.log(`----------------------`);

        /* +
           + +
           + + +
           + + + +
           + + + + +
           + + + +
           + + +
           + +
           +     */

           

           for(r=1;r<=5;r++){              // +
                str=""                     // + +
                for(c=1;c<=r;c++){         // + + +
                    str=str+"+ "           // + + + +
                }                          // + + + + +  
                console.log(str);
            }

            for(r=4;r>=1;r--){             // + + + +
                str=""                     // + + +
                for(c=1;c<=r;c++){         // + +
                    str=str+ "+ "          // +
                }
                console.log(str);
                
            }  

            console.log(`----------------------`);
            // method 2

            for(r=1;r<=9;r++){
                if(r<=5){
                    str=""
                    for(c=1;c<=r;c++){
                        str=str+"+ "
                    }
                    console.log(str);
                    
                }
                else{
                    str=""
                    for(c=1;c<=10-r;c++){
                        str=str+"+ "
                    }
                    console.log(str);
                    
                }
            }


            console.log(`----------------------`);
            /* + + + +
               + + +
               + +
               +    */
   
           for(r=4;r>=1;r--){
               str=""
               for(c=1;c<=r;c++){
                   str=str+ "+ "
               }
               console.log(str);
               
           }    

           console.log(`----------------------`);
            /*       +
                   + +   
                 + + +  
               + + + +    */

               for(r=1;r<=4;r++){
                st=''
                for(c=r;c<4;c++){
                    st+="  "
                }
                for(c=1;c<=r;c++){
                    st+=c+" "
                }
                console.log(st);
                
               }

               console.log(`----------------------`);
               /*     + + + +
                        + + +   
                          + +  
                            +    */

            for(r=1;r<=4;r++){
                st=''
                for(c=1;c<r;c++){
                    st+="  "
                }
                for(c=4;c>=r;c--){
                    st+="+ "
                }
                console.log(st);
                
                }             