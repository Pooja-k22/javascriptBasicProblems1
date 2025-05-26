text='HAI HELLO ALL HELLO WORLD'

// w.a.p to print the word count from thr given string
// op= {HAI:1 , HELLO:2 , ALL:1, WORLD:1}

newtxt=text.split(' ')
console.log(newtxt);
obj={}

for(let w of newtxt){
    if (w in obj) {
        obj[w]+=1
    }
    else{
        obj[w]=1
    }
}
console.log(obj);
console.log('........................');


// or
text.split(' ').forEach((w)=>w in obj? obj[w]+=1 : obj[w]=1)
console.log(obj);
console.log('..............................');


// w.a.p to find the number count
// {10:2,20:2,30:3,50:1,60:1}
arr=[10,20,30,10,50,20,30,30,60]

ob={}
arr.forEach((n)=> n in ob? ob[n]+=1 : ob[n]=1)
console.log(ob);
console.log('........................');


// w.a.p to find the first repeated letter
// B
pattern='ABCBCDA'

obj={}
l=Array.from(pattern)
for(let item of l){
    if(item in obj){
        console.log(item);
        break
    }
    else{
        obj[item]=1
    }
}







