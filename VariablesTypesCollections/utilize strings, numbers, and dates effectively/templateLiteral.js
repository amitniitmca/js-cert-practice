let principalAmount = 10000;
let rateOfInterest = 8.5;
let timeDuration = 5;

let si = (principalAmount * rateOfInterest * timeDuration) / 100;
let ta = principalAmount + si;

let curr = "INR";
let symbol = "/-";

let message = `Prinicipal Amount = ${curr} ${principalAmount}${symbol}\n`;
message += `Rate of Interest = ${rateOfInterest}%\n`;
message += `Time Duration = ${timeDuration} years\n`;
message += `Simple Interest = ${curr} ${si}${symbol}\n`;
message += `Total Amount = ${curr} ${ta}${symbol}\n`;

console.log(message);