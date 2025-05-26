// [1000,'neel','dev','kochi',25000,3]

class Employee{
    // properties
    empid
    empName
    empDesg

    // constructors
    constructor(id,name,desig){
        this.empid =id
        this.empName = name
        this.empDesg = desig
        // this.display()
    }

    // methods
    display(){
        console.log(`employee name is ${this.empName}`);
        
    }
}

const emp1 = new Employee('1','max','hr')
emp1.display()

const emp2 = new Employee('2','roy','dev')
emp2.display()
console.log('..............................................');

// students class

class student{
    constructor(name,age){
        this.name=name
        this.age=age
        this.marks={}
    }

    addMarks(subject,mark){
        this.marks[subject]=mark
        console.log(this.marks);         //{ math: 80, phy: 90, che: 100 }
        
    }

    avgmarks(){
       const subjects=Object.keys(this.marks)
        console.log(subjects);
        
        if(subjects.length===0)return 0

        totalMark=marks.map((m)=>Object.values(m)).reduce((s1,s2)=>s1+s2)
        console.log(totalMark);
        
        return totalMark/subjects.length

    }

    
}
 const std1 = new student()
 std1.addMarks('math',80)
 std1.addMarks('phy',90)
 std1.addMarks('che',100)

 std1.avgmarks()