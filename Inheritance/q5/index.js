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
// Question # 5
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.eat = function () {
        return "".concat(this.name, " is eating!");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color, speed) {
        var _this = _super.call(this, name, color) || this;
        _this.speed = speed;
        return _this;
    }
    Cat.prototype.run = function () {
        return "".concat(this.name, " is running at ").concat(this.speed, "kmph.");
    };
    return Cat;
}(Animal));
var animal = new Animal("Lion", "Brown");
console.log(animal.eat());
var kitty = new Cat("Kitty", "Black", 45);
console.log(kitty.run());
//                        XXXXXXXXXXXXXXXXXXXXX
