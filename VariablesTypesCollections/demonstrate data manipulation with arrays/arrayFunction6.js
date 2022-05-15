const array1 = ['a', 'e', 'i', 'o', 'u'];
const array2 = [1, 2, 3, 4, 5, -6];

array3 = array1.concat(array2);

console.log(array1);
console.log(array2);
console.log(array3);

console.log(array3.join(" | "));
array3.reverse();
console.log(array3.join(" | "));

const nestedArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.log(nestedArray);
const flatArray = nestedArray.flat(2);
console.log(flatArray);

console.log(array2.every((item, index, array) => item > 0));
console.log(array2.some((item, index, array) => item < 0));