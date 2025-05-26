// multi level inheritance
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

class C extends B{
    methodC (){
        console.log('method C');
        
    }
}
const obj=new C()
obj.methodB()
obj.methodA()
obj.methodC()