let varSting = '123';
let varInteger = 123;
let varFloat = 123.45;
let varBoolean = true;
let varBigInt = 123456n;

console.log("Loose Equality Operators");
console.log(varInteger == varSting);
console.log(varInteger == varFloat);
console.log(varInteger == varBoolean);
console.log(1 == varBoolean);
console.log(0 == varBoolean);
console.log(varInteger == varBigInt);

console.log("Arithmetic Operators");
console.log(varInteger + varSting);
console.log(varInteger + varFloat);
console.log(varInteger + varBoolean);
console.log(1 + varBoolean);
console.log(0 + varBoolean);

console.log("Comparison Operators");
console.log(varInteger > varSting);
console.log(varInteger < varFloat);
console.log(varInteger > varBoolean);
console.log(1 > varBoolean);
console.log(0 > varBoolean);
console.log(varInteger > varBigInt);

console.log("Logical Operators");
console.log(varInteger && varSting);
console.log(varInteger && varFloat);
console.log(varInteger && varBoolean);
console.log(1 && varBoolean);
console.log(0 && varBoolean);
console.log(varInteger && varBigInt);

console.log("Unary Operators");
console.log(++varInteger);
console.log(++varSting);
console.log(++varFloat);
console.log(++varBoolean);
console.log(++varBigInt);

console.log("Bitwise Operators");
console.log(varInteger & varSting);
console.log(varInteger & varFloat);
console.log(varInteger & varBoolean);
console.log(1 & varBoolean);
console.log(0 & varBoolean);
