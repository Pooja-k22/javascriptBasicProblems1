// array methods:
// 1) foreach- acccess each items

a=[1,2,4,14,25]
// find sq of each element in the given array
a.forEach(num =>{
    console.log(num**2);
    
})
console.log('............................');


//2) map()
sq=a.map((num)=>num**2)
console.log(sq);
console.log('............................');


// cube of given no using map
cb=a.map((num)=>num**3)
console.log(cb);
console.log('............................');

// w.a.p to return a new array with element with following condition
// if the parent array contains element greater than equal 13 decrement with 1
// if the parent array contains element less than 13 increment with 1
// a=[10,11,12,13,14] op=[11,12,13,12,13]

a=[10,11,12,13,14]
 newarray = a.map((n)=>{
   return n>=13? n-1 : n+1
    
}
)
console.log(newarray);
console.log('...............................');


// 3) reduce()

// find lowest expense
exp=[12000,5000,60000,1200,50]

low=exp.reduce((n1,n2)=> n1<n2?n1:n2)
console.log(low);
console.log('.....................');

// highest
high=exp.reduce((n1,n2)=> n1>n2?n1:n2)
console.log(high);
console.log('.....................');

// sum
sum=exp.reduce((n1,n2)=> n1+n2)
console.log(sum);
console.log('.....................');

// 4) filter()

// w.a.p to find even no 
a=[1,2,3,4,5,6]
even=a.filter((num)=>num%2==0)
console.log(even);
console.log('.....................');

// w.a.p to print nos greater than or equal to 4
a=[1,2,3,4,5,6]
newarr=a.filter((n)=>n>=4)
console.log(newarr);
console.log('......................');

// 5)find:

// w.a.p to find even no 
a=[1,2,3,4,5,6]
even=a.find((num)=>num%2==0)
console.log(even);
console.log('.....................');


// 6) some()

// w.a.p check whether the given array contain even number
a=[1,2,3,4,5]
even=a.some((num)=>num%2==0)
console.log(even);
console.log('.....................');


// 7) splice()

colors=['red','rose','blue','yellow']
console.log(colors);
colors.splice(2,0,'black')
console.log(colors);


// 8) includes

console.log(colors.includes('blue'));

// 9) indexOf

console.log(colors.indexOf('yellow'));

// 10) slice
x=colors.slice(1,4)
console.log(x);



