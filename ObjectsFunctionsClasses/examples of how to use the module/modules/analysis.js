function average(){
    let sum = 0;
    let count = 0;
    for(let num of arguments){
        sum += num;
        count++;
    }
    return (sum/count).toFixed(2);
}

function topAndBottom(){
    let numbers = [];
    for(let num of arguments){
        numbers.push(num);
    }
    numbers.sort((a, b) => a-b);
    let size = numbers.length;
    if(size < 4){
        throw "At least 4 numbers are required by function: topAndBottom";
    }
    console.log(numbers);
    let top3 = [numbers[size-1],numbers[size-2],numbers[size-3]];
    let bottom3 = [numbers[0],numbers[1],numbers[2]];
    return {topThree: top3, bottomThree: bottom3};
}

export {average, topAndBottom};