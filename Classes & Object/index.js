//                           OOP Practice
//                           classes & Object
// Question # 1 
var Student = /** @class */ (function () {
    function Student(rollNo, name, department, gender) {
        this.rollNo = rollNo;
        this.name = name;
        this.department = department;
        this.gender = gender;
    }
    Student.prototype.studentFun = function () {
        return "Student Roll Number is ".concat(this.rollNo, ", Student Name is ").concat(this.name, " Student Department is ").concat(this.department, " Student Gender is ").concat(this.gender);
    };
    return Student;
}());
var student1 = new Student(1, "Tayyaba", "SWE", "Female");
var student2 = new Student(2, "Areeba", "CIT", "Female");
var student3 = new Student(3, "Iqra", "DIT", "Female");
var student4 = new Student(4, "Dua", "CS", "Female");
var student5 = new Student(5, "Aliya", "BSCS", "Female");
var studentData = [];
studentData.push(student1, student2, student3, student4, student5);
console.log(studentData);
//                   XXXXXXXXXXXXXXXXXXXXX
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
// Question # 3
var Car = /** @class */ (function () {
    function Car(name, engine, seats, ac, price) {
        this.name = name;
        this.engine = engine;
        this.seats = seats;
        this.ac = ac;
        this.price = price;
    }
    return Car;
}());
var car1 = new Car("Maruti Swift", "1200CC", 5, true, 550000);
console.log(car1);
var car2 = new Car("Toyota Fortuner", "2700CC", 7, true, 2800000);
console.log(car2);
var car3 = new Car("BMW", "3000CC", 6, false, 3000000);
console.log(car3);
