// find highest expense
// find lowest exp
// total exp
 
exp=[12000,5000,60000,1200,50]
h=exp[0]
l=exp[0]
te=0
for(let i of exp){
    if(h<i){        
        h=i

    }
    if(l>i){         
        l=i
    }

    te+=i           

}
console.log('highest=',h);
console.log('lowest=',l);
console.log('total exp=',te);

console.log('--------------------');
// check 2 is present in an array
arr=[10,11,12,9,3,4]
isPresent=false
a=2
// // for(let x of arr){
// //     if(a===x){
// //         isPresent=true
// //         break;
        
// //     }
// }
tru=arr.some((n)=>n==2)
console.log(tru);

console.log(isPresent?'present':'not present');

console.log('--------------------');
// display following output
// i/p=[4,5,6]
// o/p=[11,10,9]

ip=[4,5,6]
op=[]
p=7
for(let i in ip ){
    op[i]=ip[i]+p
    p-=2
}
console.log(op);

// or
/* ip=[4,5,6]
op=[]
sum=0
for(let i of ip ){
    sum+=i
}
for(let j of op){
    op.push(sum-j)
}
console.log(op); */

console.log('------------------------');
// find duplicate no from array
// op=[10 ,20,30]
a=[10,20,30,20,30,40,50,60,10,10,20]  
o=[]

for(i=0;i<a.length;i++){
    
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            added=false
            for(k=0;k<o.length;k++){
                if (a[i]==o[k]) {
                    added=true
                    break
                }
            }
            if (!added) {
                o.push(a[i])
                
            }
            
        }
        
    }
    
}
console.log(o.length==0?'no dup':o);



