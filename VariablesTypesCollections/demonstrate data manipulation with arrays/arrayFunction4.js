const myArray1 = ["A P Singh", "Amit Kumar", "Vicky Kumari", "Sparsh Singh", "Amit Kumar", "Ajay Choudhary"];

console.log(myArray1);
myArray1.sort();
console.log(myArray1);

const myArray2 = [
    {name: "A P Singh", age: 70},
    {name: "Amit Kumar", age: 34},
    {name: "Sparsh Singh", age: 11},
    {name: "Vicky Kumari", age: 32}
];

myArray2.sort((a, b) => b.age - a.age);
console.log(myArray2);