// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// Gather the inputs from the command-line
// remove the first 2 elements of the command line arguments array
// slice

const args = process.argv.slice(2);
console.log('args:', args);

// Edge case: We need at least 2 arguments

if (args.length < 2) {
  console.log('Please enter at least 2 arguments!');
  // stop the execution of our program
  // what the purpose of a return? => return a value to the function call, side effect => exit the function
  // return;
  process.exit();
}

// iterate through the arguments
// for loop: for of, c-style loop, forEach
// create an accumulator

const sum = function (numbers) {
  let total = 0;

  for (let arg of numbers) {
    // add the numbers => strings
    // typecast the string into a number
    // Edge case: If any argument is not a whole number, skip it.

    // Math.floor
    // arg % 1 === 0

    const convertedNb = Number(arg);

    if (Number.isInteger(convertedNb)) {
      total += convertedNb;
      console.log('arg:', arg, 'total:', total, 'type:', typeof convertedNb);
    }
    // Edge case: If any argument is not a number, output an error message.

    if (isNaN(convertedNb)) {
      console.log('Please enter only numbers');
      process.exit();
    }
  }

  return total;
};

const result = sum(args);
// print the output
console.log('Total:', result);
