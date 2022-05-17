class Ticket {
    constructor(id, date, customerName, origin, destination) {
        // Implementation here    
    }    
    createPDF() {
        // Implementation here    
    }
}

function printFileFn(file) {

}

function errorHandler(...args) {
    let fn;
    if (args[2]) {
        var [, , descriptor] = args;            
        fn = descriptor.value;    
    } else {
        [fn] = args;    
    }
    
    let returnFunction = function(){
        try {
            fn();
        } catch (error) {
            console.log(error);
        }
    }
    if (descriptor) { 
        descriptor.value = returnFunction;
        return descriptor;    
    }
    return returnFunction;
}
