// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; ++i) {
//     for (let j = 0; j < arr.length - 1 - i; ++j) {
//       if (arr[j] > arr[j + 1]) {
//         const lesser = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = lesser;
//       }
//     }
//   }

//   return arr;
// }
// console.log(bubbleSort(input));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let indexOfMin = i;
    // for문 j 돌면서 arr[j]가 arr[indexOfMin]보다 작으면 indexOfMin을 j로 치환한다. 즉, 현재값과 배열 내 값들을 비교하며, 현재 값보다 작은 값의 위치를 기록하는 것이다.
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    // 현재 값보다 작은 값이 배열 내 존재했다면 indexOfMin과 i는 같지 않을 것이고 따라서 큰 값인 현재 값과 작은 값의 위치를 서로 바꿔준다.
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

const input = [5, 4, 3, 2, 1];
console.log(selectionSort(input));

/*
From i = 0 to arr.length
  Assume the element at 'i' is the least in the array, assign i to 'indexOfMin'
  For j from i + 1 to end of array (for j)
    See if there is an element with lower value
      if there is, record its index
  If the index of the current element and the index of the 'lowest'element is not the same, swap 'em
*/
