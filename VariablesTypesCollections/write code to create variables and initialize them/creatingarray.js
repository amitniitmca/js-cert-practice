var array1 = ["A P Singh", "Amit Kumar", "Vicky Kumari", "Sparsh Singh"];

var array2 = new Array(70, 34 ,32, 11);

console.log("Name \t Age");
console.log(array1[0]+"\t"+array2[0]);
console.log(array1[1]+"\t"+array2[1]);
console.log(array1[2]+"\t"+array2[2]);
console.log(array1[3]+"\t"+array2[3]);


var array3 = [25, "Super", 45.65, 1234567n, {name : array1[0], age: array2[0]}, array1, array2];

var emptyArray1 = [];
var emptyArray2 = [,];
var emptyArray3 = [,,];

var arr1 = Array.from("12345");
var arr2 = Array.from("Amit");

var arr3 = Array.of("Amit");
var arr4 = Array.of("Amit", "Ajay");

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);