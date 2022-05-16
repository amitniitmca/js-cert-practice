// class Employee{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.employeeId = this.firstName.charAt(0)+""+this.lastName.charAt(0)+"_"+(Math.random()*10000).toFixed(0);
//     }
//     get fullName(){
//         return this.firstName+" "+this.lastName;
//     }
//     getEmployeeId(){
//         return this.employeeId;
//     }
// }

let Employee = class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = this.firstName.charAt(0) + "" + this.lastName.charAt(0) + "_" + (Math.random() * 10000).toFixed(0);
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    getEmployeeId() {
        return this.employeeId;
    }
}

const employee1 = new Employee("Amit", "Kumar");
const employee2 = new Employee("Vicky", "Kumari");

console.log(employee1);
console.log(employee2);