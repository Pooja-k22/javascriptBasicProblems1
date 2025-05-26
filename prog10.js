//17 prog to check palindrom or not
// 121 = 121

n=128
temp=n
r=0
while(n>0){
    ld=n%10
    r=r*10+ld
    n=Math.floor(n/10)
    
}

if(r==temp){
    console.log('num is palindrom');
    
}
else{
    console.log('not pal');
    
}

console.log(`--------------`);
//18 print factorial of num

n=10
i=1
f=1
while(i<=n){
    f=f*i
    i++
}
console.log('fact= ',f);



console.log(`------------------`);
//19 check num is armstrong or not

n=153
tem=n
s=0

while(n>0){
    ld=n%10
    s=s+ld**3
    n=Math.floor(n/10)

}

if(tem===s){
    console.log('amst no');
    
}
else{
    console.log('not amst');
    
}

console.log(`---------------`);


//20. display no whose exponential is in the range 8-36
// user can input the power to find the exponential for a particelar num
// eg: 2
// 1**2 2**2 3**2 4**2 5**2  o/p=3 4 5 6


n=2
i=1
while (i<=36) {
    nw=i**n  /* 1 8 27 64 ..........*/
    if(nw<=36 && nw>=8){
        console.log(i);
    }
    if (nw>=36) {
        break;
        
    }
    
    i++   

}
















