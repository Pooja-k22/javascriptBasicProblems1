// for loop problems

//21 prog to print all num from 1-5 

for (let i = 1; i <=5; i++){
    
    console.log(i);
}
console.log(`---------------------`);


//22 print 10-1

for (let i = 10; i >0; i--){ 
    console.log(i);
}

console.log(`---------------------`);
//23 print factorial of no

n=5
f=1
for (let i = 1; i <=n; i++){
    f*=i
}
console.log('fact =',f);

console.log(`---------------------`);
//24 create a loop which have the potential to print 1-10 nos but print only 1-5

for(let i=1; i<=10; i++){
    if (i>5) {
        break; 
    }
    console.log(i);                                                                                                                                       
}

console.log(`---------------------`);
//25 prog to cheak a given no prime or not

n=20
if (n>1) {
    count=0
    for(j=2;j<n;j++){
        if (n%j===0 ) {
            count++
            break;
            
        }
      }
      console.log(count>0? 'not prime':'prime');
      
}
else if (n===1) {
    console.log('neither prime nor composite');
} 
else {
    console.log('not prime');
}

console.log(`---------------------`);
//26  pro to display all prime no btw 1-50


n=50
for(let j=2;j<=n;j++){

    c=0

    for(let i=2;i<j;i++){
        if (j%i===0) {
            c++
            break;
        
        }
    }
    if (c===0){
        console.log(j); /*2 3 5 7 ...... */
        
    }
}
    
console.log(`---------------------`);
    
//27 hw: print amg no bet 8-500

for(i=8;i<=500;i++){
    tmp=i
    s=0
    c=i
    d=0
    while(c>0){
        d++
        c=parseInt(c/10)
    }
    while(tmp>0){
        ld=tmp%10
        s=s+ld**d
        tmp=parseInt(tmp/10)
    }

    if (s===i) {
        console.log(i);
        
    }
}