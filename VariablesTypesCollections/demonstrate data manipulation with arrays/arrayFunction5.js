const myArray = [
    {name: "A P Singh", age: 70},
    {name: "Amit Kumar", age: 34},
    {name: "Sparsh Singh", age: 11},
    {name: "Vicky Kumari", age: 32}
];

const newArray = myArray.map((item, index, array) => {
    return item.name+" is "+item.age+" years old";
});

console.log(myArray);
console.log(newArray);

let averageAge = (myArray.reduce((acc, item) => acc + item.age, 0))/myArray.length;
console.log('Average Age : '+averageAge);


const filteredArray = myArray.filter((value, index, array) => value.age >= 18);
console.log(filteredArray);