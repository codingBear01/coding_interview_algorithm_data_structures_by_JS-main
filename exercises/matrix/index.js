// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7]]

function matrix(n) {
  // 1. Create empty array of arrays called 'results'
  const results = [];

  for (let i = 0; i < n; ++i) {
    results.push([]);
  }
  // 2. Create variables
  let cnt = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  // 3. As long as (start column <= end column) AND (start row <= end row)
  while (startCol <= endCol && startRow <= endRow) {
    // 3-1. Loop from start column to end column
    // Input values into Top row
    for (let i = startCol; i <= endCol; ++i) {
      // 3-1-1. At results[start_row][i] assign counter variable
      results[startRow][i] = cnt;
      // 3-1-2. Increment counter
      cnt++;
    }
    // 3-2. Increment start row
    startRow++;
    // 3-3. Loop from row[1] to end row
    // Input values into Right Col
    for (let i = startRow; i <= endRow; ++i) {
      // 3-3-1. At results[i][end_column] assign counter variable
      results[i][endCol] = cnt;
      // 3-3-2. Increment counter
      cnt++;
    }
    // 3-4. Decrement end column
    endCol--;
    // 3-5. Loop from end column to start column
    // Input values into End Row
    for (let i = endCol; i >= startCol; --i) {
      // 3-5-1. At results[endRow][i] assign counter variable
      results[endRow][i] = cnt;
      // 3-5-2. Increment counter
      cnt++;
    }
    // 3-6. Decrement end row
    endRow--;
    // 3-7. Loop from end row to start row
    // Input values into Start Col
    for (let i = endRow; i >= startRow; --i) {
      // 3-7-1. At results[i][startCol] assign counter variable
      results[i][startCol] = cnt;
      // 3-7-2. Increment counter
      cnt++;
    }
    // 3-8. Increment start column
    startCol++;
  }

  return results;
}

console.log(matrix(3));

module.exports = matrix;
