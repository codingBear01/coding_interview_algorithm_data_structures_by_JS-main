// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  // node의 입력값 data를 배열로 children에 push
  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    // filter() method로써 특정값을 제외한 배열을 반환
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    // arr에 값이 들어 있는 동안 while 돌면서 shift()로 맨 앞 값 들어내기
    while (arr.length) {
      const node = arr.shift();
      // 그냥 node.children을 push하면 array로 들어가서 nested array 되기 때문에 하나씩 꺼내어 push
      arr.push(...node.children);
      //   for (let child of node.children) {
      //     arr.push(child);
      //   }
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
