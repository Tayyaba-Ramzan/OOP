//                           OOP Practice
//                           Classes & Object
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
