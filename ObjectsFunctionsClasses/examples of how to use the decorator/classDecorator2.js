function classMethodDecorator(target, name, descriptor){
    let fn = descriptor.value;
    descriptor.value = () => {
        return fn();
    }
    return descriptor;
}

class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @classMethodDecorator
    getFullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

