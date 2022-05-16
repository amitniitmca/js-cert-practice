function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeId = this.firstName.charAt(0) + "" + this.lastName.charAt(0) + "_" + (Math.random() * 10000).toFixed(0);
}

Employee.prototype.getEmployeeId = function(){
    return this.employeeId;
}

Employee.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

function SalesExecutive(firstName, lastName, target){
    Employee.call(this, firstName, lastName);
    this.target = target;
}
SalesExecutive.prototype = Object.create(Employee.prototype);

SalesExecutive.prototype.getTarget = function(){
    return this.target;
}

let se = new SalesExecutive("Amit", "Kumar", 500000);

console.log(se.getEmployeeId());
console.log(se.getFullName());
console.log(se.getTarget());