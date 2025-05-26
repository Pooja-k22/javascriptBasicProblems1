// w.a.p to display all the vowels from the given string

str='Good afternoon' //vow= a e i o u
char=Array.from(str)
vowels=['a','e','i','o','u','A','E','I','O','U']

for(let c of char){
    if(vowels.includes(c)){
        console.log(c);
    }
}

// OR

x=Array.from(str).filter((item)=>vowels.includes(item))
console.log(x);
console.log('.........................');


// w.a.p to check string is palindrome or not
// eg malayalam

st='malayalam'
pal =''
for(let c=st.length-1 ; c>=0; c--){
    pal+=st[c]    
}
console.log(pal==st? 'pal':'not pal');

//or

function ispal(st){
    left=0
    right=st.length-1
    while (left<right) {
        if(st[left]!==st[right]){
            return false
        }
        left++
        right--
    }
    return true
}

str='level'
console.log(ispal(str));
console.log('.......................');



// find the largest word from the given string

str='my first programme'
ch=str.split(" ")
largest=''

console.log(ch);
for(let w of ch){
    if(largest.length<w.length){
        largest=w
    }
 }

console.log('largest =',largest);

// or
x=str.split(' ').reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(x);
