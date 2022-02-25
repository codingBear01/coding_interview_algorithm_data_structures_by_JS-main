// Object를 활용하여 배열 내 문자의 등장횟수 구하기
const str = "Hello There!";
const chars = {};

for (let char of str) {
  // chars[char]와 chars[char]가 일치하면 + 1, 그렇지 않다면 1 설정.
  chars[char] = chars[char] + 1 || 1;
}

console.log(chars);

/* with if
//str객체 처음부터 for문 돌면서 하나하나 char값으로 대입
for (let char of str) {
  // chars 객체에 char가 한 번도 등장한 적이 없다면?
  if (!chars[char]) {
    // chars[char]를 1로 설정
    chars[char] = 1;
  } else {
    // 등장한 적 있다면 1씩 증가
    chars[char]++;
  }
}
*/
