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
// Question # 4
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting."));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, numDoors) {
        var _this = _super.call(this, make, model) || this;
        _this.numDoors = numDoors;
        return _this;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " with ").concat(this.numDoors, " doors is starting."));
    };
    Car.prototype.honk = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is honking."));
    };
    return Car;
}(Vehicle));
var vehicle = new Vehicle("Toyota", "Corolla");
vehicle.start();
var car = new Car("Honda", "Civic", 4);
car.start();
car.honk();
//                   XXXXXXXXXXXXXXXXXXXXX
