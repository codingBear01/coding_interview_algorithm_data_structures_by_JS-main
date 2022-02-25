// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[\W]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));

module.exports = anagrams;

/* solution 1. my solution
function anagrams(stringA, stringB) {
  const sortedStringA = stringA.split("").sort().join("").toLowerCase();
  const sortedStringB = stringB.split("").sort().join("").toLowerCase();
  
  return sortedStringA === sortedStringB;
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
// console 창에는 false라고 뜨는데 test는 통과임...ㅇㅅaㅇ 뭐징...
*/

/* solution 2. simpler ver. with RegExp
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[\W]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
 */

/* solution 3. with for...in & if & RegExp
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // obj aCharMap의 key 개수와 bCharMap의 key 개수가 다르면 false 반환(다른 문자가 섞여 있다는 뜻)
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  // obj aCharMap의 value of key와 bCharMap의 value of key를 비교해서 다르면 false(문자열 내 각 문자의 등장횟수)
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};
  // str을 RegExp 활용하여 특수문자, 공백, 숫자 등을 ""으로 치환하고 소문자로 반환
  for (let char of str.replace(/[\W]/g, "").toLowerCase()) {
    // obj charMap에 char를 key로 할당하고 새로운 값이면 '1', 존재하던 값이면 1을 증가
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
 */
