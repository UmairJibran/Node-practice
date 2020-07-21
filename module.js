let addNumbers = (numbersToAddUp) => {
  let sum = 0;
  for (let i = 0; i < numbersToAddUp.length; i++) {
    sum += numbersToAddUp[i];
  }
  return sum;
};

module.exports = addNumbers;
