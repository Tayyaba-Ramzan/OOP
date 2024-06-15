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

// Question # 2

class Employee {
    name: string;
    experience: number;
    city: string;
    salary: number
    constructor(name: string, experience: number, city: string, salary: number) {
        this.name = name;
        this.experience = experience;
        this.city = city;
        this.salary = salary
    }
    data() {
        return `Hello! I am ${this.name} and this company is the Wonderfull.`
    }
    joiningYear() {
        return `My joining year is ${2020 - this.experience}.`;
    }
}
let employeeOne = new Employee("Tayyaba", 2, "Karachi", 50000);
console.log(employeeOne);
console.log(employeeOne.data());
console.log(employeeOne.joiningYear());

let employeeTwo = new Employee("Hassan", 6, "Karachi", 100000);
console.log(employeeTwo);
console.log(employeeTwo.data());
console.log(employeeTwo.joiningYear());

let employeeThree = new Employee("Faisal", 10, "Karchi", 80000);
console.log(employeeThree);
console.log(employeeThree.data());
console.log(employeeThree.joiningYear());

//                        XXXXXXXXXXXXXXXXXXXXX

// Question # 3

class Car {
    name: string;
    engine: string;
    seats: number;
    ac: boolean;
    price: number
    constructor(name: string, engine: string, seats: number, ac: boolean, price: number) {
        this.name = name;
        this.engine = engine;
        this.seats = seats;
        this.ac = ac;
        this.price = price
    }
}
let car1 = new Car("Maruti Swift", "1200CC", 5, true, 550000);
console.log(car1);
let car2 = new Car("Toyota Fortuner", "2700CC", 7, true, 2800000);
console.log(car2);
let car3 = new Car("BMW", "3000CC", 6, false, 3000000);
console.log(car3);

//                        XXXXXXXXXXXXXXXXXXXXX