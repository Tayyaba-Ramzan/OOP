//                           OOP Practice
//                           Classes & Object

// Question # 4

class Car{
    brand:string;
    year:number;
    color:string
    constructor(brand:string,year:number,color:string){
        this.brand=brand;
        this.year=year;
        this.color=color
    }
    start(){
        return("Car Start!");
    }
    stop(){
        return("Car Stop!");
    }
}
let lexus=new Car("Lexus",2022,"Blue");
console.log(lexus.color);
let fortuner=new Car("fortuner",2024,"Black");
console.log(fortuner);
let audi=new Car("Audi",2020,"White");
console.log(audi.brand);
let corolla=new Car("BMW",2023,"Gray");
console.log(corolla.stop());

//                        XXXXXXXXXXXXXXXXXXXXX