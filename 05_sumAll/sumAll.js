const sumAll = function(num1, num2) {
    let result = 0
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number")
    return 'ERROR'

    let[firstNum, lastNum] = num1 < num2 ? [num1, num2] : [num2, num1]
    while (firstNum <= lastNum) {
        result += firstNum
        firstNum++
    }
    return result
}

// не трогать
module.exports = sumAll;
