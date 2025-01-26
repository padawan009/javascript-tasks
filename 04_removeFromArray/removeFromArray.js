const removeFromArray = function(array, ...restArr) {
    let newArr = array
    let restArrLength = restArr.length
    let counter = 0
    while (restArrLength > 0) {
        newArr = newArr.filter(arg => arg !== restArr[counter])
        counter++
        restArrLength--
    }
    return newArr
};

// не трогай код ниже
module.exports = removeFromArray;
