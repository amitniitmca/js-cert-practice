let symbolVar = Symbol("Right <");
let nullVar = null;
let undefinedVar;
let nanVar = Number("text");

console.log(symbolVar);
console.log(nullVar);
console.log(undefinedVar);
console.log(nanVar);

console.log("Boolean");
if (symbolVar) {
    console.log('symbol as true');
}
else {
    console.log('symbol as false');
}
if (nullVar) {
    console.log('null as true');
}
else {
    console.log('null as false');
}
if (undefinedVar) {
    console.log('undefined as true');
}
else {
    console.log('undefined as false');
}
if (nanVar) {
    console.log('nan as true');
}
else {
    console.log('nan as false');
}

console.log("Number");
// console.log(symbolVar + 1);
console.log(nullVar + 1);
console.log(undefinedVar + 1);
console.log(nanVar + 1);

console.log("String");
// console.log("symbolVar : " + symbolVar);
console.log("nullVar : " + nullVar);
console.log("undefinedVar : " + undefinedVar);
console.log("nanVar : " + nanVar);