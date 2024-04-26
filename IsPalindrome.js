const reverse = (str) => {
  let start = 0;
  let end = str.length - 1;
  let str_arr = str.split("");

  for (let i = 0; start < end; i++) {
    let temp = str_arr[end];
    str_arr[start] = str_arr[end];
    str_arr[end] = temp;
    start++;
    end--;
  }
  return str_arr;
};

const isPalindrome = (str) => {
  let str_lower = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  /**
   *
   * we need to check if the original string is equat to itself reversed then its a
   * palinrome
   */

  if (str_lower === reverse(str_lower).join("")) {
    return true;
  }
  return false;
};

console.log(isPalindrome("racecar"));
