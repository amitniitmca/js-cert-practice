function add(){
    let sum = 0;
    let strNumbers = [];
    for(let num of arguments){
        sum += Number(num);
        strNumbers.push(Number(num));
    }
    console.log("Sum of "+strNumbers+" = "+sum);
}

add(1, 2, 3, 4, 5);
add(10, 20, 30, 40, 50);
add(10, 20);
add();