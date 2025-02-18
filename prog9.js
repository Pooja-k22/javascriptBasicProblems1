// while loop problems

//8 prog to print javascript 5 times

i=1
while(i<=5){
    console.log('javascript');
    i++
}
console.log(`-------------`);

//9 no from 1 to 5

i=1
while(i<=5){
    console.log(i);
    i++
}

console.log(`-------------`);
//10 print 10 to 1

i=10
while(i>0){
    console.log(i);
    i--
}

console.log(`-------------`);
//11 print even no 1-50

i=1
while(i<=50){
    if(i%2==0){
        console.log(i);
        
    }
    i++
}

console.log(`-------------`);
//12 print odd no 1-50

i=1
while(i<=50){
    if(i%2!=0){
        console.log(i);
        
    }
    i++
}

console.log(`-------------`);
//13 print sum of all no 1-10

i=1
sum=0
while(i<=10){
    sum+=i
    i++
}
console.log(`sum = ${sum}`);


console.log(`-------------`);
//14 print sum of all odd no 1-10

i=1
sum=0
while (i<=10) {
    if (i%2!=0) {
        sum+=i
        
    }
    i++
}
console.log('sum= ',sum);

console.log(`-------------`);
//15 print sum of all even no 1-10

i=1
sum=0
while (i<=10) {
    if (i%2==0) {
        sum+=i
        
    }
    i++
}
console.log('sum= ',sum);

console.log(`-------------`);



//16 print reverse given no
// 123 - 321

n=123
s=0
i=1
while (n>0) {
  r=n%10 /*3,  2,  1*/
  console.log('r=',r);
  
  s=s*10+r /*3, 32  321*/
  console.log('s=',s);
  
  n=Math.floor(n/10) /*12, 1 */
  console.log('n=',n);
  
   
  console.log(`-------------`);
  
}
console.log('rev no =',s);

console.log(`-------------`);

num=123
rev=0
while(num>0){
    ld=num%10
    rev=rev*10+ ld
    num=parseInt(num/10)
}
console.log(rev);

