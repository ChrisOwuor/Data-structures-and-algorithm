/**
 * Write a function called isAnagram that takes two strings as input and returns true
 * if the two strings are anagrams of each other, and false otherwise. Anagrams are words
 * or phrases that contain the same characters in a different order.
 * 
 * 
 * hint since the letters are the same we can arrange then in a order
 * then we check if the aaranges elements are same

        For example:

        isAnagram("listen", "silent") should return true.
        isAnagram("hello", "world") should return false.
 */

const isAnagram = (char1, char2) => {
  let char1_arr = char1.split("").sort().join("");
  let char2_arr = char2.split("").sort().join("");

return char1_arr===char2_arr

};
console.log(isAnagram("listen", "silent"));