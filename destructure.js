//Object Destructering...

class Student{
    constructor(id, name, address, location,x){
        this.id = id;
        this.name = name;
        this.personLocation = {
            address: address,
            location: location,
        }
        this.hello = x => x;
    }
    
}
const student1 = new Student(1, "Ariful Islam", "Muradpur", "chittagong", 10);
console.log(student1)
// console.log(student1.person)

// const person = {
//     name: "Ariful Islam",
//     age: 23,
//     job: "Problem Solving",
//     college: "National Institute of Technology",
//     address: "Muradpur, Chittagong"
// }
// const {name, college} = person;
// console.log(name,college)

// //Array Destructering...

// const nameArray = ["Ariful","Karimul","Shoriful","Salamot","Rahmat"];
// const [...ads] = nameArray;
// console.log(ads)