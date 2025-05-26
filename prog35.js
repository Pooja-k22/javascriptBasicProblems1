// objects operatation:
emp={
    id:1000,
    name:'neel',
    designation:'developer',
    location:'kochi',
    salary:30000,
    exp:3
}

// 1) add

emp['attend']= 90
console.log(emp);
console.log('........................');

Object.assign(emp,{'status':true})
console.log(emp);
console.log('....................');

obj={name:'pooja'}
console.log(String(obj));
console.log(JSON.stringify(obj));
console.log('....................');

nums={
    a:40,
    b:80,
    name:'nums'
}
multp(nums)
function multp(ob) {
    for( key in ob){
        if(typeof ob[key]==='number'){
            ob[key]*=2
        }
    }
}
console.log(nums);


// 2) update

emp['exp']+=5
console.log(emp);

// 3) delete

delete emp.status
console.log(emp);









