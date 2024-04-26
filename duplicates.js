const removeDuplicates = (str) => {
  let result = "";

  let str_arr = str.split("");
  for (let i = 0; i < str_arr.length; i++) {
    if (result.indexOf(str_arr[i]) === -1) {
      result += str_arr[i];
    }
  }
  return result;
};

console.log(removeDuplicates("hommaaop"));

const remDupicates = (str) => {
  let str_arr = str.split("");
  for (let i = 0; i < str_arr.length; i++) {
    for (let j = i + 1; j < str_arr.length; j++) {
      if (str_arr[i] === str_arr[j]) {
        str_arr.splice(j, 1);
        j--;
      }
    }
  }
  return str_arr
};

console.log(remDupicates("wwwerrt").join(''));