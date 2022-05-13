let var1 = "This a sample string creating with string literal";
let var2 = "sample text with the text word repeated text 3 times";

let greeting = "Hello";
let wishes = "Good morning";
let name = "Amit Kumar";

let lowerCaseVar = var1.toLowerCase();
let upperCaseVar = var1.toUpperCase();
let message = greeting.concat(" ", name, ", " + wishes + "!");
let message2 = message.replace("Hello", "Bye");
message2 = message2.replace("morning", "day");

console.log('Normal Message 1 : ' + var1);
console.log('Normal Message 2 : ' + var2);
console.log('Lowercase Message : ' + lowerCaseVar);
console.log('Uppercase Message : ' + upperCaseVar);
console.log('Message 1 : ' + message);
console.log('Message 2 : ' + message2);
console.log('Message includes Hello: ' + message.includes("Hello"));
console.log('Message includes Bye: ' + message.includes("Bye"));
console.log('Message index of A: ' + message.indexOf("A"));
console.log('Message index of Amit: ' + message.indexOf("Amit"));
console.log('Message index of Amit Kumar: ' + message.indexOf("Amit Kumar"));

let index1 = var2.indexOf("text");
console.log('Message 2 index of the 1: ' + index1);
let index2 = var2.indexOf("text", index1 + 1);
console.log('Message 2 index of the 2: ' + index2);
let index3 = var2.indexOf("text", index2 + 1);
console.log('Message 2 index of the 3: ' + index3);
let index4 = var2.indexOf("text", index3 + 1);
console.log('Message 2 index of the 4: ' + index4);

let var3 = var2.substring(var2.length / 2);
let var4 = var2.substring(var2.length / 2, var2.length - 1);
console.log('Message before substring : ' + var2);
console.log('Message after substring from half message length : ' + var3);
console.log('Message after substring from half till length-1 : ' + var4);
console.log('search the text in message 2 : ' + var2.search("text"));

let var5 = var2.padStart(var2.length * 2, "@");
let var6 = var2.padEnd(var2.length * 2, "$@$");
console.log('Pad Start message 2 twice length : ' + var5);
console.log('Pad End message 2 twice length : ' + var6);

let var7 = "    " + var2 + "    ";
console.log('Without Trim : ' + var7);
console.log('With Trim : ' + var7.trim());