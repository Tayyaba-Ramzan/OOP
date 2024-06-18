//                           OOP Practice
//                           Inheritance

// Question # 4

class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    start(): void {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

class Car extends Vehicle {
    numDoors: number;

    constructor(make: string, model: string, numDoors: number) {
        super(make, model);
        this.numDoors = numDoors;
    }

    start(): void {
        console.log(`${this.make} ${this.model} with ${this.numDoors} doors is starting.`);
    }

    honk(): void {
        console.log(`${this.make} ${this.model} is honking.`);
    }
}

const vehicle = new Vehicle("Toyota", "Corolla");
vehicle.start();

const car = new Car("Honda", "Civic", 4);
car.start();
car.honk();

//                   XXXXXXXXXXXXXXXXXXXXX