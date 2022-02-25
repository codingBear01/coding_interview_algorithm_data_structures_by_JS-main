// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // 아래처럼 설정하지 않고 for문 돌면서 왼쪽이 공백일 시 result에 add하는 식으로 짜면 str의 첫째값은 탐색 대상에서 제외되기 때문에 대문자로 반환 안 됨. 따라서 미리 input의 첫째값을 대문자로 설정.
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; ++i) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(capitalize("look, it is working!"));

module.exports = capitalize;

/* solution 1. my solution
function capitalize(str) {
  const splited = str.split(" ");
  let res = [];

  for (let char of splited) {
    const splitedSubArr = char.split("");
    let capitalized = splitedSubArr.shift().toUpperCase();
    capitalized = splitedSubArr.unshift(capitalized);

    res.push(splitedSubArr.join(""));
  }
  return res.join(" ");
}

console.log(capitalize("a short sentence"));
*/

/* solution 2. simpler ver. with for...of
function capitalize(str) {
  let words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

console.log(capitalize("look, it is working!"));
*/

/* solution 3. with for loop
function capitalize(str) {
  // 아래처럼 설정하지 않고 for문 돌면서 왼쪽이 공백일 시 result에 add하는 식으로 짜면 str의 첫째값은 대문자로 반환 안 됨. 따라서 미리 input의 첫째값을 대문자로 설정.
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; ++i) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(capitalize("look, it is working!"));
*/
