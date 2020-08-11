// class Student{
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
// }
// const nameArray = ["Arif","Shorif", "Karim","Salam","Balam"]
// for(let i=1;i<5;i++)
// {
//     const student1 = new Student(i, nameArray[i])
//     // const student2 = new Student(i, "Mahiya Islam")
//     console.log(student1)
// }

class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

const student1 = new Student(1, "Ariful Islam");
const student2 = new Student(2, "Shorif Kamal");
console.log(student1, student2)