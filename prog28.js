employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

console.log(employee);
console.log('..................');

//1) print all employee name 
nameEmp=employee.forEach((emp)=>{
    console.log(emp[1]);
    
 })
 
console.log('......................................');

//2) print total numbers of employee
console.log(employee.length);
console.log('......................................');

//3) print developer employee details
nw=employee.filter((emp)=> emp[2]=='developer')
console.log(nw);

console.log('......................................');


//4) print employee whose salary > 30000
sal=employee.filter((emp)=> emp[4]>30000).map((t)=> t[1] ) //.forEach((item)=>console.log(item[1]))
console.log('sal =',sal);


console.log('......................................');


//5) print details of employee Laisha
laisha=employee.filter((emp)=>emp[1]=='Laisha')
console.log(laisha);
console.log('..............................');

//6) arrange  the employee based on salary in descending order
des=employee.sort((n1,n2)=>n2[4]-n1[4])
console.log(des);
console.log('......................................');

//7) arrange emp based on experience in ascending order
asc=employee.sort((n1,n2)=>n1[5]-n2[5])
console.log(asc);

console.log('......................................');

//8) find total salary of company
exp=employee.map((em1)=>em1[4]).reduce((n1,n2)=>n1+n2)
console.log('sum=',exp);
console.log('......................................');


//9) find the highest salary
high=employee.reduce((em1,em2)=>em1[4]>em2[4]?em1:em2)
console.log(high[4]);

console.log('.....................');

//10) find lowest salary

low=employee.reduce((em1,em2)=>em1[4]<em2[4]?em1:em2)
console.log(low[4]);
console.log('.....................');



