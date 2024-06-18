//                           OOP Practice
//                           Classes & Object

// Question # 5

class Person{
    name:string;
    height:number;
    email:string;
    constructor(name:string,height:number,email:string){
        this.name=name;
        this.height=height;
        this.email=email;
    }
    work(){
        return `Solve Problems Solving, Buid Something!`
    }
}
let p1=new Person("Tayyaba",5.2,"tayyabaramzan.pak@gmail.com");
console.log(p1.work());
let p2=new Person("Rida",5.4,"ridafatima@gmail.com");
console.log(p2.name);
let p3=new Person("Hassan",5.3,"mhassan312@gmail.com");
console.log(p3.email);

//                        XXXXXXXXXXXXXXXXXXXXX