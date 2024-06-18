//                           OOP Practice
//                           Classes & Object
// Question # 4
var Car = /** @class */ (function () {
    function Car(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }
    Car.prototype.start = function () {
        return ("Car Start!");
    };
    Car.prototype.stop = function () {
        return ("Car Stop!");
    };
    return Car;
}());
var lexus = new Car("Lexus", 2022, "Blue");
console.log(lexus.color);
var fortuner = new Car("fortuner", 2024, "Black");
console.log(fortuner);
var audi = new Car("Audi", 2020, "White");
console.log(audi.brand);
var corolla = new Car("BMW", 2023, "Gray");
console.log(corolla.stop());
//                        XXXXXXXXXXXXXXXXXXXXX
