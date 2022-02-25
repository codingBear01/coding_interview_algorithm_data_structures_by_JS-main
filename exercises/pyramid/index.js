// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let stair = 1; stair <= n; ++stair) {
    let res = "";

    for (let sharp = 1; sharp <= 2 * stair - 1; ++sharp) {
      res += "#";
    }

    for (let space = 1; space <= n - stair; ++space) {
      res = " " + res + " ";
    }

    console.log(res);
  }
}

pyramid(5);

module.exports = pyramid;

/* solution 1. my solution
function pyramid(n) {
  for (let stair = 1; stair <= n; ++stair) {
    let res = "";
    
    for (let sharp = 1; sharp <= 2 * stair - 1; ++sharp) {
      res += "#";
    }

    for (let space = 1; space <= n - stair; ++space) {
      res = " " + res + " ";
    }

    console.log(res);
  }
}

pyramid(5);
*/

/* solution 2. with for loop
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; ++row) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; ++column) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

pyramid(5);
 */

/* solution 3. recursive function
function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

pyramid(5);
 */
