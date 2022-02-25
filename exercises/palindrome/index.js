// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

console.log(palindrome("abba"));

module.exports = palindrome;

/* solution 1. my solution
function palindrome(str) {
  const reversed = str.split("").reduce((rev, char) => char + rev, "");
  if (reversed !== str) {
    return false;
  }
  return true;
}
console.log(palindrome("abba"));
 */

/* solution 2. return boolean directly
function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}
console.log(palindrome("abba"));
 */

/* solution 3. with every()
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}
console.log(palindrome("abba"));
*/
