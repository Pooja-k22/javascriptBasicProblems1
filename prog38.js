weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

wData={}
for(let data of weatherData){
    district=data.district
    currTem=data.weather
    if(district in wData){
        oldTem=wData[district]
        if(oldTem>currTem){
            wData[district]=oldTem
        }
        else{
            wData[district]=currTem
        }
    }
    else{
        wData[district]=currTem
    }
}

console.log(wData);
console.log('__________________________________________________');

// hw
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
products.forEach((p)=>console.log(p.pName)
)
console.log('__________________________________________________');


//2. print all mobile details whose display is lcd
mobile=products.filter((p)=>p.display=='lcd')
console.log(mobile);
// or
for(let p of products){
    if(p.display=='lcd'){
        console.log(p);
    }
}
console.log('__________________________________________________');

//3. print 5g mobile phone name
products.filter((p)=>p.band=='5g').forEach((Name)=>console.log(Name.pName)
)
console.log('__________________________________________________');

//4. sort mobile based on price
products.sort((p1,p2)=>p1.price-p2.price).forEach((p)=>console.log(p.pName)
)

console.log('__________________________________________________');

//5. print costly mobile
highcost=products.reduce((p1,p2)=>p1.price>p2.price ? p1:p2)
console.log(highcost.pName);

console.log('__________________________________________________');

//6. print low cost mobile
lowcost=products.reduce((p1,p2)=>p1.price<p2.price ? p1:p2)
console.log(lowcost.pName);
console.log('__________________________________________________');



























