function errorHandlingDecorator(fn){
    return function(...args){
        try {
            console.log("Trying function "+fn.name);
            fn(...args);
        } catch (error) {
            console.log(error);
        }
    };
}

function dividing(num1, num2){
    return num1 / num2;
}

function accessArray(array){
    return array[5];
}

let call1 = errorHandlingDecorator(dividing);
let call2 = errorHandlingDecorator(accessArray);
let myarray = [10,20];

call1(25,0);
call2(myarray);