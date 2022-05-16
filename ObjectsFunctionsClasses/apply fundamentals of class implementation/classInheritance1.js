class Employee{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = this.firstName.charAt(0)+""+this.lastName.charAt(0)+"_"+(Math.random()*10000).toFixed(0);
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
    getEmployeeId(){
        return this.employeeId;
    }
    static isEmployee(obj){
        return obj instanceof Employee;
    }
}

class SalesExecutive extends Employee{
    constructor(firstName, lastName, target){
        super(firstName, lastName);
        this.target = target;
    }
    getTarget(){
        return this.target;
    }
    static isSalesExecutive(obj){
        return obj instanceof SalesExecutive;
    }
}

let se = new SalesExecutive("Amit", "Kumar", 45000);

console.log(se.fullName);
console.log(se.getEmployeeId());
console.log(se.getTarget());
console.log(Employee.isEmployee(se));
console.log(SalesExecutive.isSalesExecutive(se));