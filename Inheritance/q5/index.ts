//                           OOP Practice
//                           Inheritance

// Question # 5

class Animal{
    name:string;
    color:string;
    constructor(name:string,color:string){
        this.name=name;
        this.color=color

    }
    eat(){
        return `${this.name} is eating!`
    }
}
class Cat extends Animal{
    speed:number;
    constructor(name:string,color:string,speed:number){
        super(name,color);
        this.speed=speed
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph.`
    }

}
let animal=new Animal("Lion","Brown");
console.log(animal.eat());
let kitty=new Cat("Kitty","Black",45);
console.log(kitty.run());

//                        XXXXXXXXXXXXXXXXXXXXX