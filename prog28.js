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

// print all employee name 
nameEmp=employee.forEach((emp)=>{
    console.log(emp[1]);
    
 })
 
console.log('......................................');

// print total numbers of employee
console.log(employee.length);
console.log('......................................');


// arrange emp based on experience in ascending order
asc=employee.sort((n1,n2)=>n1[5]-n2[5])
console.log(asc);

console.log('......................................');

// find total salary of company
exp=employee.reduce((s,emp)=>s+emp[4],0)
console.log('sum=',exp);
console.log('......................................');


// find the highest salary
high=employee.reduce((em1,em2)=>em1[4]>em2[4]?em1:em2)
console.log(high);

console.log('.....................');

// find lowest salary

low=employee.reduce((em1,em2)=>em1[4]<em2[4]?em1:em2)
console.log(low);

console.log('.....................');



