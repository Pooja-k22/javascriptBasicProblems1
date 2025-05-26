//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
products.forEach((n)=>console.log(n[1])
)
console.log('.......................');


//2. display product whose price < Rs.50
products.filter((p)=>p[2]<50).forEach((item)=>console.log(item[2])
)
console.log('.......................');

//3. print price of oreo
price=products.find((n)=>n[1]=='oreo')
console.log('price of oreo=',price[2]);
console.log('.......................');

//4. print costly product name
cost=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log('costly prod=',cost[1]);
console.log('.......................');

//5. display out of stock product
outOfstock=products.filter((p)=>p[3]<1).forEach((item)=>console.log('outofstpck prod =',item[1])
)
console.log('.......................');

//6. sort products based on stock in decsending order
products.sort((p1,p2)=>p2[3]-p1[3]).forEach((item)=> console.log(item[1])
)
console.log('.......................');

//7. print product having maximum available stock
max=products.reduce((p1,p2)=> p1[3] > p2[3] ? p1:p2)
console.log('max stock prod =',max[1]);
console.log('.......................');

//8. is there any product can be purchased by Rs. 10
pro=products.some((p)=>p[2]<=10)
console.log(pro);
console.log('.......................');

//9. Is there any product in the range of 10 to 30 rs
prod=products.some((p)=>p[2]>=10 && p[2]<=30)
console.log(prod);
console.log('.......................');


//10. print all products in the range of 10 to 30 rs
products.filter((p)=>p[2]>10 && p[2]<30).forEach((item)=>console.log(item[1])
)
console.log('.......................');
