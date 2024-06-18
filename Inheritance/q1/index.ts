//                           OOP Practice
//                           Inheritance

// Question # 1 

class Student{
    id:number;
    firstName:string;
    lastName:string
    age:number; 
    constructor(id:number,firstName:string,lastName:string,age:number){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    bioData(){
        return `Hello! My id is ${this.id}, My firstName is ${this.firstName},  My lastName is ${this.lastName} & My age is ${this.age}.`
    }
}
class Programmer extends Student{
    language:string;
    gitHub:string;
    linkedIn:string;
    constructor(id,firstName,lastName,age,language,gitHub,linkedIn){
        super(id,firstName,lastName,age);
        this.language=language;
        this.gitHub=gitHub;
        this.linkedIn=linkedIn
    }
    favoriteLanguage(){
        if (this.language==="Python") {
            return `My Favorite Programming Language is Python!`
        } else {
            return `My Favorite Programming Language is ${this.language}.`
        }
    }

}
let s1=new Programmer(1,"Fatima","Kanwal",21,"Python","tayyaba-ramzan","tayyabaRamzan");
console.log(s1.favoriteLanguage());
let s2=new Programmer(2,"Muhammad","Hassan",24,"TypeScript","hassan409","Muhammad Hassan");
console.log(s2.favoriteLanguage());
let s3=new Programmer(3,"Aliya","Ashraf",20,"C#","aliAshraf","Aliyashraf");
console.log(s3.favoriteLanguage());

//                   XXXXXXXXXXXXXXXXXXXXX