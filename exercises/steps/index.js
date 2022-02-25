// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  // base case. it is the most important to set correct base case.
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);

  //   if (stair.length <= row) {
  //     stair += "#";
  //   } else {
  //     stair += " ";
  //   }

  //   steps(n, row, stair);
}

steps(5);

module.exports = steps;

/* steps of recursion function
  step.1
  1-1. steps(5, row = 0, stair = "#")
  1-2. steps(5, row = 0, stair = "# ")
  1-3. steps(5, row = 0, stair = "#  ")
  1-4. steps(5, row = 0, stair = "#   ")
  1-5. steps(5, row = 0, stair = "#    ") → 이 단계에서 stair.length(5)와 n(5)이 같으므로 row + 1
  
  step.2
  2-1. steps(5, row = 1, stair = "#")
  2-2. steps(5, row = 1, stair = "##")
  2-3. steps(5, row = 1, stair = "## ")
  2-4. steps(5, row = 1, stair = "##  ")
  2-5. steps(5, row = 1, stair = "##   ")

  ...step.3 ~ step.5

  step5까지 돌고 각 단계의 마지막 줄을 console.log로 stair 한 줄씩 출력.
*/

/* solution 1. my solution
function steps(n) {
  let sharp = "";
  let space = "";

  for (let i = 1; i <= n; ++i) {
    sharp += "#";
    for (let j = n - i; j > 0; --j) {
      space += " ";
    }

    console.log(sharp + space);
    space = "";
  }
}

steps(5);
*/

/* solution 2. for loop with if
function steps(n) {
  for (let row = 0; row < n; ++row) {
    let stair = "";

    for (let col = 0; col < n; ++col) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}

steps(5);
*/

/* solution 3. recursive function
function steps(n, row = 0, stair = "") {
  // base case. it is the most important to set correct base case.
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);

  //   if (stair.length <= row) {
  //     stair += "#";
  //   } else {
  //     stair += " ";
  //   }

  //   steps(n, row, stair);
}

steps(5);
*/
