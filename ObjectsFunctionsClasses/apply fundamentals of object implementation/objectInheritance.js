// function Employee(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Employee.prototype.age = 34;
// Employee.prototype.showDetails = function(){
//     console.log("Employee's Name : "+this.firstName+" "+this.lastName);
//     console.log("Employee's Age : "+this.age);
// }

// let amit = new Employee("Amit", "Kumar");
// amit.showDetails();

let Employee = {
    firstName : "Amit",
    lastName : "Kumar",
    age : 34
}

let salesExecutive = Object.create(Employee);

salesExecutive.firstName = "Vicky";
salesExecutive.lastName = "Kumari";
salesExecutive.age = 32;
salesExecutive.target = 45000;

console.log(Employee);
console.log(salesExecutive);

console.log(salesExecutive.isPrototypeOf(Employee));
console.log(Employee.isPrototypeOf(salesExecutive));
console.log(salesExecutive.hasOwnProperty('firstName'));
console.log(salesExecutive.hasOwnProperty('target'));
console.log(Employee.hasOwnProperty('target'));
console.log(Employee.hasOwnProperty('firstName'));