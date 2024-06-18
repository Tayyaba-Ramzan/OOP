//                           OOP Practice
//                           Classes & Object
// Question # 2
var Employee = /** @class */ (function () {
    function Employee(name, experience, city, salary) {
        this.name = name;
        this.experience = experience;
        this.city = city;
        this.salary = salary;
    }
    Employee.prototype.data = function () {
        return "Hello! I am ".concat(this.name, " and this company is the Wonderfull.");
    };
    Employee.prototype.joiningYear = function () {
        return "My joining year is ".concat(2020 - this.experience, ".");
    };
    return Employee;
}());
var employeeOne = new Employee("Tayyaba", 2, "Karachi", 50000);
console.log(employeeOne);
console.log(employeeOne.data());
console.log(employeeOne.joiningYear());
var employeeTwo = new Employee("Hassan", 6, "Karachi", 100000);
console.log(employeeTwo);
console.log(employeeTwo.data());
console.log(employeeTwo.joiningYear());
var employeeThree = new Employee("Faisal", 10, "Karchi", 80000);
console.log(employeeThree);
console.log(employeeThree.data());
console.log(employeeThree.joiningYear());
//                        XXXXXXXXXXXXXXXXXXXXX
