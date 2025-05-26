// function problems

//1 write a fun which display 'javascript on call

function display() {
    console.log('javascript');
    
}
display();

//2 w.a.p find the sum of two no using fun

function sum(a,b) {
    console.log('sum= ',a+b);
    
    
}
sum(5,9)
sum(20,50)
console.log(`-----------------`);

//3 w.r.p no odd or even
 function oddoreven(a){
   return a%2==0?'even':'odd'
 }

console.log(oddoreven(9));
console.log(`-----------------`);


//4  pos or neg
function posneg(a){
    return a>0?'pos':a==0?'neither pos nor neg':'neg'
 }

console.log(posneg(0));
console.log(`-----------------`);

//5 cube of num
function cube(n) {
    return n**3
    
}
console.log("cune of num=",cube(4));
console.log(`-------------------`);


// 6. fibanacci sequence of given no
// num will be sum of previous 2 no
// eg 0 1 1 -fib(3)

function fibanacci(n){
    fib=[0,1]

    for(i=2;i<n;i++){
         fib[i]=fib[i-2]+fib[i-1]
    }
    return fib
}

console.log(fibanacci(6));
console.log(`-------------------`);

//7 factorial of no

function fact(n){
    fNo=1
    for(i=2;i<=n;i++){
        fNo*=i
    }
    return fNo
}
console.log(fact(5));
console.log(`-------------------`);

//8 prime no

function prime(n){
    if (n<2) {
        return false
    }
    for(i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(prime(31));
console.log(`--------------------`);

//9 check no is power of 2

function powerofTow(a) {
    if(a<1) return false
    while(a>1){             
       if (a%2!==0) {
        return false
       }
       a=a/2
    }
    return true
}

console.log(powerofTow(8));//true
console.log('------------------');



