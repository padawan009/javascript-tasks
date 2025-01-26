const convertToCelsius = function(temp) {
  const newTemp = (temp - 32) * (5 / 9)
  return (Math.round(newTemp * 10) / 10)
};

const convertToFahrenheit = function(temp) {
  const newTemp = temp * (9 / 5) + 32
  return Number(newTemp.toFixed(1))
};

// это тоже нельзя (!)
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
