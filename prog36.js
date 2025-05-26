var car={
    name:'Baleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10lakh'
}

// display the car name and manufracturer name
console.log('car name is ',car.name , 'and manufacturer is', car.manufacturer);
console.log('.....................');


// check 'model' key is present in the object if present print the value
for(key in car){
    if(key==='model'){
        console.log(car[key]);
        
    }
}
console.log('....................');
// or 

'model' in car && console.log(car.model);
console.log('....................');


// add 'varient' key to the car object with value as 'manuel'
car['varient']=['manuel']
console.log(car);
console.log('....................');

// insert another value to 'automatic' to varient key
car.varient.push('automatic')
console.log(car);
console.log('....................');

// add 'color' key to the object with value as 'red' , 'yellow', 'white'
car['color']=['red','yellow','white']
console.log(car);
console.log('....................');
