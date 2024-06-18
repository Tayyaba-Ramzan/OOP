//                           OOP Practice
//                           Classes & Object
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
//                        XXXXXXXXXXXXXXXXXXXXX
