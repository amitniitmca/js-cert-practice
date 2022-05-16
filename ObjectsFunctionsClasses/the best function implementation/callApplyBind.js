let greetObject = {
    morningGreet(message, punct){
        console.log(`Good morning ${this.username}, ${message}${punct}`);
    },
    afternoonGreet(message, punct){
        console.log(`Good afternoon ${this.username}, ${message}${punct}`);
    },
    eveningGreet(message, punct){
        console.log(`Good evening ${this.username}, ${message}${punct}`);
    },
    nightGreet(message, punct){
        console.log(`Good night ${this.username}, ${message}${punct}`);
    }
}

let user1 = {username: "A P Singh"};
let user2 = {username: "Amit Kumar"};
let user3 = {username: "Sparsh Singh"};
let user4 = {username: "Vicky Kumari"};

greetObject.morningGreet.call(user1, "How are you", "?");
greetObject.morningGreet.call(user2, "How are you", "?");
greetObject.morningGreet.call(user3, "How are you", "?");
greetObject.morningGreet.call(user4, "How are you", "?");

greetObject.afternoonGreet.apply(user1, ["How's things going on","?"]);
greetObject.afternoonGreet.apply(user2, ["How's things going on","?"]);
greetObject.afternoonGreet.apply(user3, ["How's things going on","?"]);
greetObject.afternoonGreet.apply(user4, ["How's things going on","?"]);

greetObject.eveningGreet.apply(user1, ["How was the day","?"]);
greetObject.eveningGreet.apply(user2, ["How was the day","?"]);
greetObject.eveningGreet.apply(user3, ["How was the day","?"]);
greetObject.eveningGreet.apply(user4, ["How was the day","?"]);

greetObject.nightGreet.bind(user1, "Sweet Dreams", "!")();