function elapsedTime(sDate) {
    let secDivisor = 1000;
    let minDivisor = secDivisor * 60
    let eMSecs = Date.parse(new Date()) - Date.parse(sDate);
    let minutes = Math.floor(eMSecs / minDivisor);
    let seconds = eMSecs - (minutes * minDivisor);
    return `The question took ${minutes} minute(s) and ${Number(seconds / secDivisor).toFixed(0)} second(s).`;
}

console.log(elapsedTime(new Date()));

console.log(elapsedTime(new Date()));