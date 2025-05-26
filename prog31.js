// String

// methods:
// 1) starsWith() : boolean value , case sensitive
 str='Pooja'
 console.log(str.startsWith('p'));
 
 // 2) endsWith() : boolean value , case sensitive

 console.log(str.endsWith('a'));

//  3)toUpperCase() : 
st1='lazza'
console.log(st1.toUpperCase());

//  4)toLowerCase() : 
st2='lazza'
console.log(st2.toLowerCase());

//  5)substring()
str='luminar'
x=str.substring(2)
console.log(x);

//  6) slice()
s='ooyutr'
console.log(s.slice(2,4));

// 7) trim(): remove space in ends
 str='       hel   lo'
 console.log(str.trim());

//  8) split(seperator) :new array
text='good evening all'
arr=text.split('')
console.log(arr);

// 9) replace(): first element
sn='i come from kkd and i also work in kkd'
a=sn.replace('kkd','pkd')
console.log(a);

// 10) replaceAll(): all same element
sn='i come from kkd and i also work in kkd'
a=sn.replaceAll('kkd','pkd')
console.log(a);


//  11) array.from()
t='luminar'
c=Array.from(t)
console.log(c);


 