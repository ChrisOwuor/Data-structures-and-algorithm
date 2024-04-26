/**
 *Write a function called countWords that takes a string as input and returns an object
 *containing the count of each word in the string. Words are separated by spaces, and
 *punctuation marks should be ignored. The keys of the object should be the unique words in the
 *string, and the values should be the counts of each word.
 *
 * countWords("hello world hello"); ]
      // Output: { hello: 2, world: 1 }

     countWords("the quick brown fox jumps over the lazy dog");
    // Output: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }
 *
 */

const countWords = (str) => {
  let word_obj = {};
  let str_arr = str.split(" ");
  //[ 'hello', 'world', 'hello' ]
  for (let i = 0; i < str_arr.length; i++) {
    let word = [str_arr[i]];
    if (word in word_obj) {
      word_obj[word]++;
    } else {
      word_obj[word] = 1;
    }
  }
  return word_obj;
};

console.log(countWords("hello world hello school hello world hello"));
