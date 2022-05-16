function sum(num1, num2){
    return num1+num2;
}
function product(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
function sub(num1, num2){
    return num1-num2;
}

let sum1 = sum(10, 20);
console.log("Sum1 = "+sum1);

let array = [100, 200, sum];

let sum2 = array[2](array[0], array[1]);
console.log("Sum2 = "+sum2);

function mathProcess(num1, num2, process){
    return process(num1, num2);
}

console.log('Summation = '+mathProcess(200, 50, sum));
console.log('Difference = '+mathProcess(200, 50, sub));
console.log('Product = '+mathProcess(200, 50, product));
console.log('Division = '+mathProcess(200, 50, divide));