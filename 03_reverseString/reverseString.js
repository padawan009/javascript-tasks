const reverseString = function(string) {
    let arr = string.split('')
    let newString = ''
    let lastIndex = string.length - 1
    while (lastIndex >= 0) {
        newString += arr[lastIndex]
        lastIndex--
    }
    return newString
};

// не трогаем код ниже
module.exports = reverseString;
