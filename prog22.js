// prog to find the pairs that give pairsum as 6 from the given array
// and print pairs

a=[2,3,4,5,1,5]
nopair=true
pairsum=6
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]+a[j]==pairsum){
            nopair=false
            console.log(`(${a[i]},${a[j]})`);
            
        }
    }
}
// condition && statement
nopair && console.log('no paif');


// w.a.p to print common numbers from the given arrays
p=[10,11,12,20,30]
q=[11,20,30,36,33]
// o/p=[11,20,30]

noCommon=true
for(let i of p){
    for(let j of q){
        if(i==j){
            noCommon=false
            console.log(i);
            
        }
    }
}
noCommon && console.log('no common numbers');


