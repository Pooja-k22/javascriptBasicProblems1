// array

week=['mon','tus','wed','thur']
console.log(week);
console.log(week[2]);
console.log(typeof(week));

week.push('fri')
console.log(week);

week.unshift('sun')
console.log(week);

week.pop()
console.log(week);

week.shift()
console.log(week);

for(i=0;i<week.length;i++){
    console.log(week[i]);
    
}

console.log(`---------------------`);
for(let x in week){
    console.log(week);
    
}

console.log(`---------------------`);
for(let x of week){
    console.log(x);
    
}





