const myArray1 = [{ name: "A P Singh", age: 70 }, { name: "Amit Kumar", age: 34 }, { name: "Vicky Kumari", age: 32 }, { name: "Sparsh Singh", age: 11 }];

// myArray1.forEach(item => {
//     console.log(item);
// });

// myArray1.forEach((item, index) => {
//     console.log((index+1)+": "+item);
// });

let message = [];
myArray1.forEach(item =>{
    message.push(item.name+" is "+item.age+" years old");
});

console.log(message);