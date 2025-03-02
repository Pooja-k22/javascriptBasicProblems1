//28 prog to display hcf of given no
/* eg 12 - 1 2 3 4 6 12
      28 - 1 2 4 7 14 28
      cf - 1 2 4 
      hcf - 4  */

 n1=12
 n2=28
 hcf=0
 for(i=1;i<=n1 && i<=n2 ;i++){
    if (n1%i===0 && n2%i===0) {
         hcf=i
    }
    
 }
 console.log('hcf=',hcf);

console.log(`------------------------`);


//print lcm of no 
//  lcm = greatest no or its multiples which divisible by small no
// eg 6 ,12 lcm=12   

n1=12
n2=18
max=Math.max(n1,n2)
for(let i =max;i<=n1*n1;i++){
     if (i%n1===0 && i%n2===0) {
          console.log(i);
          break
          
     }
}




