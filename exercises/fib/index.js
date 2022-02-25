// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// hforms te first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));

module.exports = fib;

/* solution 1. my solution
function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
*/

/* solution 2. for loop
function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; ++i) {
    const a = result[i - 2];
    const b = result[i - 1];

    result.push(a + b);
  }

  return result[n];
}

console.log(fib(9));
*/

/* solution 3. recursive function
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(9));
*/

/* solution 3. the ver. of improved runtime
function memoize(fn) {
  // variable 'cache' records of all the previous calls to this fn. and the respective results. cache obj will be the arguments that you are trying to call slowFib with. (argument is input 'n')
  const cache = {};
  // this fn. is same as const 'fib'. how many different arguments into this fn. you can reuse this fn. by '...args'
  return function (...args) {
    // you have ever called this fn. with particular set of args before and stored the results in this cache obj? if you have just return that. to avoid calling the same function multiple times with one or something with the same set of args each time.
    if (cache[args]) {
      return cache[args];
    }
    // if you've never called slowFib with a particular num and before then you will call slowFib, you'll take n and result and store it in cache obj.
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

console.log(fib(4));
*/
