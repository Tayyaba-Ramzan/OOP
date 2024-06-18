//                           OOP Practice
//                           Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Question # 1 
var Student = /** @class */ (function () {
    function Student(id, firstName, lastName, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Student.prototype.bioData = function () {
        return "Hello! My id is ".concat(this.id, ", My firstName is ").concat(this.firstName, ",  My lastName is ").concat(this.lastName, " & My age is ").concat(this.age, ".");
    };
    return Student;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(id, firstName, lastName, age, language, gitHub, linkedIn) {
        var _this = _super.call(this, id, firstName, lastName, age) || this;
        _this.language = language;
        _this.gitHub = gitHub;
        _this.linkedIn = linkedIn;
        return _this;
    }
    Programmer.prototype.favoriteLanguage = function () {
        if (this.language === "Python") {
            return "My Favorite Programming Language is Python!";
        }
        else {
            return "My Favorite Programming Language is ".concat(this.language, ".");
        }
    };
    return Programmer;
}(Student));
var s1 = new Programmer(1, "Fatima", "Kanwal", 21, "Python", "tayyaba-ramzan", "tayyabaRamzan");
console.log(s1.favoriteLanguage());
var s2 = new Programmer(2, "Muhammad", "Hassan", 24, "TypeScript", "hassan409", "Muhammad Hassan");
console.log(s2.favoriteLanguage());
var s3 = new Programmer(3, "Aliya", "Ashraf", 20, "C#", "aliAshraf", "Aliyashraf");
console.log(s3.favoriteLanguage());
//                   XXXXXXXXXXXXXXXXXXXXX
