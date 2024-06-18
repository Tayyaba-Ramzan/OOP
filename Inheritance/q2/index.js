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
// Question # 2
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eat = function () {
        console.log("Eat!");
    };
    Person.prototype.sleep = function () {
        console.log("Sleep!");
    };
    Person.prototype.work = function () {
        console.log("Do Nothing!");
    };
    return Person;
}());
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Engineer.prototype.work = function () {
        console.log("Solve Problems Soving, Build Something");
    };
    return Engineer;
}(Person));
var Docter = /** @class */ (function (_super) {
    __extends(Docter, _super);
    function Docter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Docter.prototype.work = function () {
        console.log("Treat Patient!");
    };
    return Docter;
}(Person));
var tayyaba = new Engineer("Tayyaba");
console.log(tayyaba.name);
var ayeshan = new Docter("Ayesha");
ayeshan.work();
var saba = new Person("Saba");
saba.work();
//                        XXXXXXXXXXXXXXXXXXXXX
