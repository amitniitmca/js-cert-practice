function classDecorator(obj, fn){
    return function(){
        console.log("Execution of "+fn.name);
        let fun = fn.call(obj);
        return fun;
    };
}

class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let obj = new User("Amit", "Kumar");
let objcall = classDecorator(obj, obj.getFullname);
console.log(objcall());