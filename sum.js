//const args = process.argv;
//console.log(args);

let myArgs = process.argv.slice(2);


const sum = function(arr) {
  let val1 = arr[0];
  let val2 = arr[1];

  let num1 = Number(val1);
  let num2 = Number(val2);
  let total = num1 + num2;
  return total;
};
console.log(myArgs,sum(myArgs));




