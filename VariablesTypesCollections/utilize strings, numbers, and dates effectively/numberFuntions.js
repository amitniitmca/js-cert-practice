let var1 = "123";
let var2 = "123.25";
let var3 = "one23.2five";
let var4 = "text";


if (Number.isNaN(Number(var1)) === false) {
    console.log(Number(var1));
}
if (Number.isNaN(Number(var2)) === false) {
    console.log(Number(var2));
}
if (Number.isNaN(Number(var3)) === false) {
    console.log(Number(var3));
}
if (Number.isNaN(Number(var4)) === false) {
    console.log(Number(var4));
}

let var5 = Number.isInteger(123);
let var6 = Number.isInteger(123.5);
let var7 = Number.isInteger("123");
let var8 = Number.isInteger("123.5");

console.log('Number.isInteger(123) : ' + var5);
console.log('Number.isInteger(123.5) : ' + var6);
console.log('Number.isInteger("123") : ' + var7);
console.log('Number.isInteger("123.5") : ' + var8);

console.log('Number.parseInt(123) : ' + Number.parseInt(123));
console.log('Number.parseInt(123.5) : ' + Number.parseInt(123.5));
console.log('Number.parseInt("123") : ' + Number.parseInt("123"));
console.log('Number.parseInt("123.5") : ' + Number.parseInt("123.5"));

console.log('Number.parseFloat(123) : ' + Number.parseFloat(123));
console.log('Number.parseFloat(123.5) : ' + Number.parseFloat(123.5));
console.log('Number.parseFloat("123") : ' + Number.parseFloat("123"));
console.log('Number.parseFloat("123.5") : ' + Number.parseFloat("123.5"));

let var9 = 234.5455;
let var10 = 234.5435;
console.log(var9 + ' after toFixed 2 = ' + var9.toFixed(2));
console.log(var10 + ' after toFixed 2 = ' + var10.toFixed(2));

console.log(var9 + ' after toString = ' + var9.toString());
console.log('253 after toString without radix = ' + Number(253).toString());
console.log('253 after toString with radix 2 = ' + Number(253).toString(2));
console.log('253 after toString with radix 8 = ' + Number(253).toString(8));
console.log('253 after toString with radix 16 = ' + Number(253).toString(16));

console.log(new Number("253"));
console.log(new Number("253.12"));
console.log(new Number(253));
console.log(new Number(253.12));
console.log(new Number("253").valueOf());
console.log(new Number(253).valueOf());
console.log(new Number("253.12").valueOf());
console.log(new Number(253.12).valueOf());