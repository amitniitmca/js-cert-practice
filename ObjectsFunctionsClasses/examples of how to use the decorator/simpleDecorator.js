function printName(name){
    console.log(name);
}


function printNameDecorator(fn){
    return function(name){
        const str = `Hello ${name}, How are you?`;
        fn(str);
    };
}

newFunction = printNameDecorator(printName);

newFunction("Amit Kumar");