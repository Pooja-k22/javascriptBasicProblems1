// id
const item= document.getElementById('h1elem')

item.style.color="yellow"

// class
 const food = document.getElementsByClassName('fruits')
 console.log(food);

Array.from(food).forEach((item)=>{
   item.style.backgroundColor='red'
})

// tagname
const h4ele= document.getElementsByTagName('h4')
const liele=document.getElementsByTagName('li')

for( let item of h4ele){
    item.style.backgroundColor='green';
}
Array.from(liele).forEach((item)=>{
    item.style.backgroundColor='pink'
}
)

// query
const li =document.querySelector("li")
console.log(li);
li.style.color='green'

// queryall
const lie =document.querySelectorAll("li")
console.log(lie);
lie.forEach((item)=>{
    item.style.color='blue'
})
