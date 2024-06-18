//                           OOP Practice
//                           Inheritance

// Question # 2

class Person{
    name:string
    constructor(name:string){
        this.name=name;

    }
    eat(){
        console.log("Eat!");

    }
    sleep(){
        console.log("Sleep!");
    }
    work(){
        console.log("Do Nothing!");   
    }
}
class Engineer extends Person{
    name:string;
    constructor(name:string){
        super(name);
        this.name=name;

    }
    work(){
        console.log("Solve Problems Soving, Build Something");
    }
}
class Docter extends Person{
    work(){
        console.log("Treat Patient!");
    }
}
let tayyaba=new Engineer("Tayyaba");
console.log(tayyaba.name);
let ayeshan=new Docter("Ayesha");
ayeshan.work();
let saba=new Person("Saba");
saba.work();

//                        XXXXXXXXXXXXXXXXXXXXX