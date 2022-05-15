const myArray = ["A P Singh", "Amit Kumar", "Vicky Kumari", "Sparsh Singh", "Amit Kumar", "Ajay Choudhary"];

console.log(myArray.indexOf("Amit Kumar"));
console.log(myArray.indexOf("Amit Kumar", 2));
console.log(myArray.lastIndexOf("Amit Kumar"));

console.log(myArray.findIndex( item => item == 'Amit Kumar'));

console.log(myArray.findIndex((item, index) => {
    if(index != 1 && item == "Amit Kumar"){
        return index;
    }
}));

console.log(myArray.find(item => item == "Amit Kumar"));
console.log(myArray.find((item, index) => {
    if(index == 3){
        return item;
    }
}));