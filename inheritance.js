class Parent{
    constructor(){
        this.fname = "Shirajul Islam";
    }
}
class Child extends Parent{
    constructor(id, name, dept){
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
}
const baby = new Child(171966, "Ariful Islam", "Computer Scince");
console.log(baby)
