let array1 = ["A P Singh", "Amit Kumar", "Vicky Kumari", "Sparsh Singh"];
let array2 = ["A P Singh", "Amit Kumar", 70, 34];
let array3 = [70, 34,32,11];

let set1 = new Set(array1);
let set2 = new Set(array2);
let set3 = new Set(array3);
set3.add(29);

console.log(array1);
console.log(array2);
console.log(set1);
console.log(set2);
console.log(set3);

let students = new Map();
students.set(1, "Amit Kumar");
students.set(2, "Ajay Choudhary");
students.set(3, "Vikas Kumar Singh");

console.log(students);
console.log(students.get(1));