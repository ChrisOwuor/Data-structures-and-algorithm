/**
 *
 *
 *
 * Write a function called sumDigits that takes a positive integer as input and returns the sum of its digits.
 */

const sumDigits = (num) => {
  let sum = 0;
  let num_arr = num.toString().split("");

  for (let i = 0; i < num_arr.length; i++) {
    sum = sum + parseInt(num_arr[i]);
  }
  return sum;
};
console.log(sumDigits(123));
