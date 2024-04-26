/**
 * Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.
        findMax([5, 10, 3, 8]) should return 10.
        findMax([17, 42, 9, 21]) should return 42.
        findMax([-3, -7, -1, -11]) should return -1.
 */

const findMax = (num) => {
  let max = num[0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
};

console.log(findMax([-1, -2, -3]));
