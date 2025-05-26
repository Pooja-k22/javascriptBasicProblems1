
// print duplicate element
function dupli(num){
    num.sort((a,d)=>a-d)
    let dup=[]
    for(let i=0;i<num.length;i++){
        if (num[i]==num[i+1] && !dup.includes(num[i])) {
            dup.push(num[i])
        }
    }
    return dup
}
let nums = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];
console.log(dupli(nums));
console.log('.......................');


// print max value
function maxmin(num) {
    return num.reduce((n1,n2)=>n1<n2?n1:n2)
}
let num1 = [1, 2, 3, 4, 5, 9, 88, 6, 7, 8, 17];
console.log(maxmin(num1));
console.log('.......................');


// print 2nd largest num
function seclarge(n) {
    if (n[0]>n[1]) {
        l=n[0]
        sl=n[1]
    }
    else{
        l=n[1]
        sl=n[0]
    }
    for(let i=2;i<n.length;i++){
        if (n[i]>l) {
            sl=l
            l=n[i]
            
        }
        else if(sl<n[i] && n[i]!=l){
            sl=n[i]
        }

    }
    return sl
    
}
let num2 = [1, 2, 3, 4, 5, 9, 88, 6, 7, 8, 17];
console.log(seclarge(num2));
console.log('.......................');

// find missing element from array of 1-10

missarray=(n)=>{
 missarr=[]
 for (let i = 1; i <= 10; i++) {
    if (!n.includes(i)) {
        missarr.push(i)
    }
    
 }
 return missarr
}

num3=[1,2,4,5,7,8,9,10]
console.log(missarray(num3));
console.log('................');


// even odd from array
evenodd=(n)=>{
    even=n.filter((n)=>n%2==0)
    odd=n.filter((n)=>n%2!=0)
    return [even,odd] 
}
num4=[1,2,4,5,7,8,9,10]
console.log(evenodd(num4));
console.log('.......................');


// print unique number

function unique(nums) {  // 1 1 2 2 3 3 
    let k=0
    for(let i=1;i<nums.length;i++){
        if(nums[k]!==nums[i] ){  //  1-2  2-3 3-
            nums[k+1]=nums[i]    //[1,2,3]
            k++                  // 1 2
        }
        
    }
     return k+1
};



n1=[1,1,2,2,3,3,4]
console.log('uniq =',unique(n1));
console.log('..............');



 
//  check array sorted or not
function sort(ar) {
    for(let i =0;i<ar.length-1;i++){
        if (ar[i]<=ar[i+1]) {
            
        }
        else {
           return false
    }
    
}
    return true
}
nu=[1,2,3,4,5,6]
console.log(sort(nu));
console.log('........................');

// move all 0 to end
ar=[1,2,0,3,2,0,0,4,5,1]
tem=[]

for(i=0;i<ar.length;i++){
    if (ar[i]!=0) {
        tem.push(ar[i])
    }
}
console.log(tem);
for(j=0;j<tem.length;j++){
    ar[j]=tem[j]
}

for(j=tem.length;j<ar.length;j++){
    ar[j]=0
}
console.log(ar);

// or

ar=[1,2,0,3,2,0,0,4,5,1]
j=-1
for(i=0;i<ar.length;i++){
    if (ar[i]==0) {
        j=i
        break
    }
}
for(i=j+1;i<ar.length;i++){
    if (ar[i]!==0) {
        
        [ar[i],ar[j]]=[ar[j],ar[i]]
        j++
    }
}

console.log(ar);
