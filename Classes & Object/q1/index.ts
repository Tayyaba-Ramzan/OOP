//                           OOP Practice
//                           Classes & Object

// Question # 1 

class Student {
    rollNo: number
    name: string;
    department: string;
    gender: string
    constructor(rollNo: number, name: string, department: string, gender: string) {
        this.rollNo = rollNo
        this.name = name;
        this.department = department;
        this.gender = gender
    }
    studentFun(): string {
        return `Student Roll Number is ${this.rollNo}, Student Name is ${this.name} Student Department is ${this.department} Student Gender is ${this.gender}`;
    }
}
let student1 = new Student(1, "Tayyaba", "SWE", "Female");
let student2 = new Student(2, "Areeba", "CIT", "Female");
let student3 = new Student(3, "Iqra", "DIT", "Female");
let student4 = new Student(4, "Dua", "CS", "Female");
let student5 = new Student(5, "Aliya", "BSCS", "Female");
let studentData: Student[] = [];
studentData.push(student1, student2, student3, student4, student5);
console.log(studentData);

//                   XXXXXXXXXXXXXXXXXXXXX