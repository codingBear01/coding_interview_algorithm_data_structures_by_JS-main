// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels("Why do you ask?"));

module.exports = vowels;

/* solution 1. my solution
ver. 1.
function vowels(str) {
  const splited = str.toLowerCase().split("");
  let cnt = 0;

  for (let char of splited) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      cnt++;
    }
  }
  
  return cnt;
}

console.log(vowels("Why do you ask?"));

ver. 2.
function vowels(str) {
  let cnt = 0;
  const vowelsArr = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.toLowerCase().length; ++i) {
    for (let j = 0; j < vowelsArr.length; ++j) {
      if (str.toLowerCase()[i] === vowelsArr[j]) {
        cnt++;
      }
    }
  }

  return cnt;
}

console.log(vowels("Why do you ask?"));
 */

/* solution 2. with for & includes()
function vowels(str) {
  let count = 0;
  const vowelsChecker = ["a", "e", "i", "o", "u"];
  // const vowelsChecker = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowelsChecker.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(vowels("Why do you ask?"));
 */

/* solution 3. with RegExp
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels("Why do you ask?"));
 */
