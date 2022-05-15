let myArray = new Array("A P Singh", "Amit Kumar", "Vicky Kumari", "Sparsh Singh");

console.log(myArray);
myArray.splice(1,0, "C P Singh", "Vipin Kumar", "Vinay Kumar", "Manish Kumar");
console.log(myArray);

let relArray = myArray.slice(1,5);
myArray.splice(1,4);

console.log(relArray);
console.log(myArray);