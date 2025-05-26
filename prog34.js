// objects

emp={
    id:1000,
    name:'neel',
    designation:'developer',
    location:'kochi',
    salary:30000,
    experience:3
}
console.log(emp);
console.log(emp['designation']);
console.log(emp.designation);
console.log('.....................');


// display all keys of objects
for(let key in emp){
    // console.log(key);
     console.log(emp[key]);
}
console.log('.....................');

