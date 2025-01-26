const repeatString = function(string, num) {
    let newString = "";
    if (num < 0)
        newString = "ERROR"
    while (num > 0) {
        newString += string
        num--
    }
    return newString
};

// не трогайте этот участок кода ниже
module.exports = repeatString;
