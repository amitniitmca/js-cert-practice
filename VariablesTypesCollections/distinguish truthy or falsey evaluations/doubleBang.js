console.log("TRUTHY STATEMENTS");
console.log(!!(13));
console.log(!!(-13));
console.log(!!(13.25));
console.log(!!(1325n));
console.log(!!("text"));
console.log(!!("0"));
console.log(!!(true));
console.log(!!([]));
console.log(!!({}));
console.log(!!(Symbol('text')));

console.log("FALSY STATEMENTS");
console.log(!!(null));
console.log(!!(0));
console.log(!!(""));
console.log(!!(false));
console.log(!!(undefined));
console.log(!!(Number("text")));