const myArray = ["A P Singh", "Amit Kumar", "Vicky Kumari", "Sparsh Singh"];

console.log('The Array : '+myArray);
console.log("Iterating with For Loop");
for(let index=0; index < myArray.length; index++){
    console.log(myArray[index]);
}

console.log("Iterating with For in Loop");
for(let index in myArray){
    console.log(myArray[index]);
}

console.log("Iterating with For of Loop");
for(let item of myArray){
    console.log(item);
}