// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverse("abcd"));

module.exports = reverse;

/* solution 1. my solution
function reverse(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; --i) {
    arr.push(str[i]);
  }
  return arr.join("");
}
*/

/* solution 2. with reverse()
function reverse(str) {
  return str.split("").reverse().join("");
}
*/

/* solution 3. with for loop
function reverse(str) {
  let reversed = "";
  for (let i = 0; i < str.length; ++i) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

or

function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
*/

/* solution 4. with reduce()
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
 */
