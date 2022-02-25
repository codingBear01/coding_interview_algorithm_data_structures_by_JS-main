// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const splited = str.split("");
  let cnt = "";
  const cntArr = [];
  // 각 문자 등장 횟수 for문 돌면서 cntArr에 담기
  for (let i = 0; i < splited.length; ++i) {
    cnt = splited.filter((el) => splited[i] === el).length;
    cntArr.push(cnt);
  }
  // cntArr에서 가장 큰 값 구하고 해당 값의 idx 구하기
  const maxCnt = [...cntArr].sort()[cntArr.length - 1];
  const maxCntIdx = cntArr.findIndex((el) => {
    return el === maxCnt;
  });
  // cntArr에 담긴 수 중 가장 큰 값과 idx가 일치하는 splited 내의 값 반환.
  return splited[maxCntIdx];
}

console.log(maxChar("abcccccccd"));

module.exports = maxChar;

/*
for ... of = array 탐색
for ... in = object 탐색 // for (let key in obj){};
*/

/* solution 1. my solution
function maxChar(str) {
  const splited = str.split("");
  let cnt = "";
  const cntArr = [];
  // 각 문자 등장 횟수 for문 돌면서 cntArr에 담기
  for (let i = 0; i < splited.length; ++i) {
    cnt = splited.filter((el) => splited[i] === el).length;
    cntArr.push(cnt);
  };
  // cntArr에서 가장 큰 값 구하고 해당 값의 idx 구하기
  const maxCnt = [...cntArr].sort()[cntArr.length - 1];
  const maxCntIdx = cntArr.findIndex((el) => {
    return el === maxCnt;
  });
  // cntArr에 담긴 수 중 가장 큰 값과 idx가 일치하는 splited 내의 값 반환.
  return splited[maxCntIdx];
}
console.log(maxChar("abcccccccd"));
 */

/* solution 2. with object
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;

    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxChar("abcccccccd"));
 */
