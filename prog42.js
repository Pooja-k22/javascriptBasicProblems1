class A{
    methodA (){
        console.log('method A');
        
    }
}

class B extends A{
    methodB (){
        console.log('method B');
        
    }
}
const obj=new B()
obj.methodB()
obj.methodA()

baleno = {
    model:'hatch',
    varient: ['automatic','manual'],
    manufact:'maruthi'
}
glanca ={
    manufact:'toyota'
}
glanca.__proto__ =baleno

console.log(baleno);
console.log(glanca);

