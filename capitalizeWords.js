/**
 * 
 * Write a function called capitalizeWords that takes an array of words as input and
 * returns a new array where each word is capitalized (the first letter of each word is uppercase).

For example:

capitalizeWords(["apple", "banana", "orange"]) should return ["Apple", "Banana", "Orange"].
capitalizeWords(["hello", "world"]) should return ["Hello", "World"].
 * 
 * 
 * 
 * 
 * 
 * 
 */

const capitalizeWords = (words) => {
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newWords.push(word[0].toUpperCase() + word.slice(1));
  }
  return newWords;
};
console.log(capitalizeWords(["hello", "world"]));
