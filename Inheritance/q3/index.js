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
// Question # 3
var data = {
    value: "User Personal Information!"
};
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.viewData = function () {
        console.log("View Data: ".concat(data.value));
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, email) {
        return _super.call(this, name, email) || this;
    }
    Admin.prototype.editData = function (newValue) {
        data.value = newValue;
    };
    return Admin;
}(User));
var student = new User("Tayyaba", "tayyabaramzan.pak@gmail.com");
student.viewData();
var admin = new Admin("Hassan", "hassan234@gmail.com");
admin.editData("Some New Value!");
console.log("Updated Data: ".concat(data.value));
//                   XXXXXXXXXXXXXXXXXXXXX
