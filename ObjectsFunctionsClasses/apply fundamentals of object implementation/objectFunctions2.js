// let user = {
//     firstName : "Amit",
//     age : 34
// }
// Object.freeze(user);

// Cannot change property: freeze is not changeable
// user.firstName = "Vicky";

// Cannot change property: freeze is not extensible
// Object.defineProperty(user, "lastName", {value: "Kumar"});

// Cannot change property: freeze is not deletable
// delete user.age;


// let user = {
//     firstName : "Amit",
//     age : 34
// }

// Object.preventExtensions(user);

// user.firstName = "Vicky";

// Cannot change property: preventExtensions is not extensible
// Object.defineProperty(user, "lastName", {value: "Kumar"});

// delete user.age;


let user = {
    firstName : "Amit",
    age : 34
}
Object.seal(user);

user.firstName = "Vicky";

// Cannot change property: seal is not extensible
// Object.defineProperty(user, "lastName", {value: "Kumar"});

// Cannot change property: seal is not deletable
// delete user.age;

console.log(user);