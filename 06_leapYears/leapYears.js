const leapYears = function(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0)
        return true
    else
        return false
};

// ну ты понял
module.exports = leapYears;
