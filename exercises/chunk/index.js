// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 4));

module.exports = chunk;

/* solution 1. my solution
function chunk(array, size) {
  const resArr = [];

  for (let i = 0; i < array.length; ++i) {
    resArr.push(array.slice(size * i, size * (i + 1)));
  }

  return resArr.filter((el) => el.length >= 1);
}

console.log(chunk([1, 2, 3, 4, 5], 4));
 */

/* solution 2. with for ... of & if
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 4));
 */

/* solution 3. with while & slice()
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));

    index += size;
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 4));
 */
