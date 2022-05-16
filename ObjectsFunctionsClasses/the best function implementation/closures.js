function makeFunction(){
    let scores = [];
    return function(num){
        scores.push(num);
        console.log(`List of numbers  : ${scores}`);
        console.log(`Total numbers  : ${scores.length}`);
        console.log(`Sum of numbers : ${scores.reduce((acc, item) => acc+item, 0)}`);
        console.log(`Avg of numbers : ${(scores.reduce((acc, item) => acc+item, 0)/scores.length).toFixed(2)}`);
    }
}

let addToList = makeFunction();

