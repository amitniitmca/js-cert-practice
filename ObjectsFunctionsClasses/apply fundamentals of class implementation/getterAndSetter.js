class Employee{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = this.firstName.charAt(0)+""+this.lastName.charAt(0)+"_"+(Math.random()*10000).toFixed(0);
    }
    set age(val){
        this.employeeAge = val;
    }
    get age(){
        return this.employeeAge;
    }
    set salary(val){
        this.employeeSalary = val;
    }
    get salary(){
        return this.employeeSalary;
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

const amitEmployee = new Employee("Amit", "Kumar");
amitEmployee.age = 34;
amitEmployee.salary = 45000;

console.log(amitEmployee.fullName);
console.log(amitEmployee.age);
console.log(amitEmployee.salary);
console.log(amitEmployee.getEmployeeId());

console.log(Employee.isEmployee(amitEmployee));