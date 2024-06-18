//                           OOP Practice
//                           Classes & Object

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