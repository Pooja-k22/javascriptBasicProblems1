// binary search

// sort
a=[19,4,7,3,4,56,8,12]
asc=a.sort((a,b)=>a-b)
console.log(asc);

des=a.sort((a,b)=>b-a)
console.log(des);
 
// target value search
// target=8

arr=[19,4,7,3,4,56,8,12]
low=0
high=arr.length-1
target=8
mid=(low+high)/2
