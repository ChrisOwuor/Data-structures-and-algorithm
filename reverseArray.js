/**
 * Write a function called reverseArray that takes an array as input and returns a new array with the elements reversed.

        For example:

        reverseArray([1, 2, 3, 4]) should return [4, 3, 2, 1].
        reverseArray(["apple", "banana", "orange"]) should return ["orange", "banana", "apple"].
 */

const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; start < end; i++) {
    let temp = arr[end];

    arr[end] = arr[start];

    arr[start] = temp;

    start++;
    end--;
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4]));

const reverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; start < end; i++) {
    let first = arr[start];
    let last = arr[end];

    arr[start] = last;
    arr[end] = first;

    start++;
    end--;
  }
  return arr;
};

console.log(reverse([1, 2, 3, 4, 5]));
