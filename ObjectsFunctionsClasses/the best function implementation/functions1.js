// Anonymous Function
let sum1 = function(num1, num2){
    return num1+num2;
}
console.log(sum1(10, 20));

// Anonymous & IIFE Function
let sum = function(num1, num2){
    return num1+num2;
}(10, 20);
console.log(sum);