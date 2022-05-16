function addTwo(num1, num2){
    return num1+num2;
}

function addAll(){
    let numbers = [];
    let sum = 0;
    for(let num of arguments){
        numbers.push(num);
        sum += num;
    }
    return {numbers: numbers, sum: sum};
}

function operate(num1, num2){
    let sum = num1+num2;
    let sub = num1-num2;
    let pro = num1*num2;
    let div = num1/num2;
    let numbers = [num1, num2];
    return {numbers: numbers, summation: sum, difference:sub, product:pro, quotient:div};
}

export {addTwo, addAll, operate};