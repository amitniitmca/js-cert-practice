let user1 = {
    firstName : "Amit",
    lastName : "Kumar"
}

let user2 = Object.assign({}, user1);

user2.firstName = "Vicky";
user2.lastName = "Kumari";

console.log(user1, user2);

console.log("==ENTRIES==");
console.log(Object.entries(user1));
console.log(Object.entries(user2));

console.log("==VALUES==");
console.log(Object.values(user1));
console.log(Object.values(user2));

Object.defineProperty(user2, "age", { value : 32 });
console.log(user2);

