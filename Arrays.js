/**
 * Let us say your expense for every month are listed below,
        January - 2200
        February - 2350
        March - 2600
        April - 2130
        May - 2190
 * 
 * 
 *  1. In Feb, how many dollars you spent extra compare to January?
    2. Find out your total expense in first quarter (first three months) of the year.
    3. Find out if you spent exactly 2000 dollars in any month
    4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
    5. You returned an item that you bought in a month of April and
        got a refund of 200$. Make a correction to your monthly expense list
        based on this
 * 
 * 
 */

let expense_arr = [
  { January: 2200 },
  { February: 2350 },
  { March: 2600 },
  { April: 2130 },
  { May: 2190 },
];

let extra_cost_feb;
extra_cost_feb = expense_arr[1].February - expense_arr[0].January;
// console.log(extra_cost_feb);

const total_expense = (arr_input) => {
  let arr = arr_input.slice(0, 3);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(Object.values(arr[i]));
  }
  return sum;
};

// console.log(total_expense(expense_arr));

const find_cost = (arr_input, cost) => {
  let match = false;
  for (let i = 0; i < arr_input.length; i++) {
    let current_val = Object.values(arr_input[i]);
    if (parseInt(current_val) === cost) {
      return true;
    }
  }
  return match;
};

// console.log(find_cost(expense_arr, 2600));

const add_expense = ({ month, expense, expense_array }) => {
  expense_array.push({ [month]: expense });
  return expense_array;
};

// console.log(
//   add_expense({ month: "June", expense: 1980, expense_array: expense_arr })
// );

const make_refunds = ({ month, amount, expense_array }) => {
  let current_month = expense_array.find((current) => {
    return Object.keys(current)[0] === month;
  });
  current_month[month] += amount;
  return current_month;
};

// console.log(
//   make_refunds({ month: "April", amount: 1000, expense_array: expense_arr })
// );
