// nested array

arr=[[1,2,3],[4,5,6],[7,8]]
for( let a of arr){
    // console.log(a);
    for( let x of a){
        console.log(x);
        
    }
}
console.log('......................');

// sum of array
sum=0
for( let a of arr){
     for( let x of a){
        sum+=x
    }
}
console.log(sum);
console.log('.............................');


// find all even no from array

for( let a of arr){
    
    for( let x of a){
        if(x%2==0){
            console.log(x);
            
        }
        
    }
}
console.log('......................................');

//1.[id, name, designation, location, salary, experience]

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

// print all employee name 
    for(let a of employee){
        console.log(a[1]);
        
    }
    console.log('......................................');


// print total numbers of employee
console.log('total no emp =' , employee.length);
console.log('......................................');



// print developer employee details
for(let a of employee){
    if(a[2]=='developer'){
        console.log(a);
        
    }
}
console.log('......................................');


// print employee whose salary > 30000
for(let a of employee){
    if (a[4]>30000) {
        console.log(a[1]);
        
    }
}
console.log('......................................');


// print details of employee Laisha
for(let a of employee){
    if (a[1]=='Laisha') {
        console.log(a);
        
    }
}