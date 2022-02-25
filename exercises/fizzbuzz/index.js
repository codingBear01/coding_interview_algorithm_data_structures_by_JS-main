// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; ++i) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log("fizz");
    } else if (i % 5 === 0) {
      // Is the number a multiple of 5?
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

module.exports = fizzBuzz;

/* solution 1. my solution
function fizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    arr.push(i);
  }

  for (j = 0; j < arr.length; ++j) {
    if (arr[j] % 3 === 0 && arr[j] % 5 === 0) {
      arr[j] = "fizzbuzz";
    } else if (arr[j] % 5 === 0) {
      arr[j] = "buzz";
    } else if (arr[j] % 3 === 0) {
      arr[j] = "fizz";
    }
    console.log(arr[j]);
  }
}
fizzBuzz(15);
 */

/* solution 2. more simple ver.
function fizzBuzz(n) {
  for (let i = 1; i <= n; ++i) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log("fizz");
    } else if (i % 5 === 0) {
      // Is the number a multiple of 5?
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);
 */
