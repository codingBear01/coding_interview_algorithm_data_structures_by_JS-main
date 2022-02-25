// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = String(n).split("").reverse();

  if (reversed[reversed.length - 1] === "-") {
    reversed.pop();
    reversed = reversed.join("");
    return Number(reversed) - Number(reversed) * 2;
  } else {
    reversed = reversed.join("");
    return Number(reversed);
  }
}

console.log(reverseInt(15));
console.log(reverseInt(-15));

module.exports = reverseInt;

/* solution 1. my solution
function reverseInt(n) {
  let reversed = String(n).split("").reverse();

  if (reversed[reversed.length - 1] === "-") {
    reversed.pop();
    reversed = reversed.join("");
    return Number(reversed) - Number(reversed) * 2;
  } else {
    reversed = reversed.join("");
    return Number(reversed);
  }
}
console.log(reverseInt(15));
console.log(reverseInt(-15));
 */

/* solution 2. with if
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}
console.log(reverseInt(15));
console.log(reverseInt(-15));
 */

/* solution 3. with Math.sign()
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(15));
console.log(reverseInt(-15));
 */
