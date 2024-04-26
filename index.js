const reverseStr = (str) => {
  debugger;
  let start = 0;
  let end = str.length - 1;

  let str_arr = str.split("");

  for (let i = 0; start < end; i++) {
    let temp = str_arr[start];

    str_arr[start] = str_arr[end];

    str_arr[end] = temp;

    start++;
    end--;
  }
  return str_arr;
};

console.log(reverseStr("123").join(''));
