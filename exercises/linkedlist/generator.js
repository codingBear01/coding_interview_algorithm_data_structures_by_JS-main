console.log("===== numbers() =====");

function* numbers1() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator1 = numbers1();
console.log(generator1.next()); // { value: 2, done: false }
// next()에 특정값이 들어가면 위 number() 안의 yield result에 next()의 argumetn가 들어감.
console.log(generator1.next(10)); // { value: 30, done: true }

console.log("===== list() =====");

function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator2 = list();

const numbers2 = [];
for (let value of generator2) {
  numbers2.push(value);
}
console.log(numbers2); // [ 1, 2, 3, 4, 5 ]

console.log("===== moreNumbers() =====");

function* numbers3() {
  yield 1;
  yield 2;
  yield* moreNumbers();
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

const generator3 = numbers3();

const values = [];
for (let value of generator3) {
  values.push(value);
}
console.log(values); // [ 1, 2, 3, 4, 5, 6, 7 ]

console.log("===== class Tree =====");

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

const values2 = [];
for (let value of tree.printValues()) {
  values2.push(value);
}
console.log(values2); // [ 1, 2, 4, 3 ]
