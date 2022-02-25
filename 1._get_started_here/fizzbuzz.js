// FizzBuzz

let arr = [];
for (let i = 1; i <= 100; ++i) {
  arr.push(i);
}

for (j = 0; j < arr.length; ++j) {
  if (arr[j] % 3 === 0 && arr[j] % 5 === 0) {
    arr[j] = "FizzBuzz";
  } else if (arr[j] % 5 === 0) {
    arr[j] = "Buzz";
  } else if (arr[j] % 3 === 0) {
    arr[j] = "Fizz";
  }
  console.log(arr[j]);
}
