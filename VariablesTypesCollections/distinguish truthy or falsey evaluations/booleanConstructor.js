console.log("TRUTHY STATEMENTS");
console.log(Boolean(13));
console.log(Boolean(-13));
console.log(Boolean(13.25));
console.log(Boolean(1325n));
console.log(Boolean("text"));
console.log(Boolean("0"));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(Symbol('text')));

console.log("FALSY STATEMENTS");
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(Number("text")));