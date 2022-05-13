let var1 = new Date();
let var2 = Date.parse(var1);
let var3 = Date.UTC(2022, 05, 12, 00, 00, 00);


console.log(var1);
console.log(var2);
console.log(var3);
console.log(new Date(var2));
console.log(new Date(var3));

console.log("var 1 get Day " + var1.getDay());
console.log("var 1 get Month " + var1.getMonth());
console.log("var 1 get Full Year " + var1.getFullYear());
console.log("var 1 get Hours " + var1.getHours());
console.log("var 1 get Minutes " + var1.getMinutes());
console.log("var 1 get Seconds " + var1.getSeconds());
console.log("var 1 get Milliseconds " + var1.getMilliseconds());