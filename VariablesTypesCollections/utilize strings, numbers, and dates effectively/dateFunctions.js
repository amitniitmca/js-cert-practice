let var1 = new Date();

console.log("Day : " + var1.getDay());
console.log("Month : " + var1.getMonth());
console.log("Year : " + var1.getFullYear());
console.log("Hours : " + var1.getHours());
console.log("Minutes : " + var1.getMinutes());
console.log("Seconds : " + var1.getSeconds());
console.log("Milliseconds : " + var1.getMilliseconds());

console.log("Before set month 2 : " + var1);
var1.setMonth(2);
console.log("After set month 2 : " + var1);
console.log("Before set year 2020 : " + var1);
var1.setFullYear(2020);
console.log("After set year 2020 : " + var1);

console.log('BEFORE : ' + var1);
var1.setHours(var1.getHours() - 1);
var1.setMinutes(var1.getMinutes() - 1);
var1.setSeconds(var1.getSeconds() - 1);
console.log('AFTER : ' + var1);

var1 = new Date();
console.log("Date : " + var1);
console.log("UTC Date : " + var1.getUTCFullYear() + "-" + var1.getUTCMonth() + "-" + var1.getUTCDay());
console.log("UTC Time : " + var1.getUTCHours() + ":" + var1.getUTCMinutes() + ":" + var1.getUTCSeconds());

console.log('To String');
console.log(var1.toString());
console.log(var1.toDateString());
console.log(var1.toUTCString());
console.log(var1.toISOString());
console.log(var1.toLocaleDateString());

