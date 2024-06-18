//                           OOP Practice
//                           Classes & Object
// Question # 5
var Person = /** @class */ (function () {
    function Person(name, height, email) {
        this.name = name;
        this.height = height;
        this.email = email;
    }
    Person.prototype.work = function () {
        return "Solve Problems Solving, Buid Something!";
    };
    return Person;
}());
var p1 = new Person("Tayyaba", 5.2, "tayyabaramzan.pak@gmail.com");
console.log(p1.work());
var p2 = new Person("Rida", 5.4, "ridafatima@gmail.com");
console.log(p2.name);
var p3 = new Person("Hassan", 5.3, "mhassan312@gmail.com");
console.log(p3.email);
//                        XXXXXXXXXXXXXXXXXXXXX
