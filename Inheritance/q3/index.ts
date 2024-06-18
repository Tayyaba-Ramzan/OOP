//                           OOP Practice
//                           Inheritance

// Question # 3

const data = {
    value: "User Personal Information!"
};

class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    viewData(): void {
        console.log(`View Data: ${data.value}`);
    }
}

class Admin extends User {
    constructor(name: string, email: string) {
        super(name, email);
    }

    editData(newValue: string): void {
        data.value = newValue;
    }
}

const student = new User("Tayyaba", "tayyabaramzan.pak@gmail.com");
student.viewData();

const admin = new Admin("Hassan", "hassan234@gmail.com");
admin.editData("Some New Value!");

console.log(`Updated Data: ${data.value}`);

//                   XXXXXXXXXXXXXXXXXXXXX