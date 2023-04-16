const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.ROOT = null;
    this.HEAD = this.ROOT;
  }

  get head() {
    return this.HEAD;
  }
  set head(node) {
    this.HEAD = node;
  }

  root() {
    return this.ROOT;
  }

  setupHead(data) {
    this.head = this.ROOT;
    let currentNode = this.ROOT;
    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left === null)
          {this.head = currentNode; return}
        else 
          {currentNode = currentNode.left;}
        continue;
      }
      if (data > currentNode.data) {
        if (currentNode.right === null)
          {this.head = currentNode; return}
        else 
          {currentNode = currentNode.right;}
        continue;
      }
      if (data === currentNode.data) {
        this.head = currentNode;
        return;
      };
    }
    /* while (currentNode !== null) {
      if (data < this.head.data) {
        if (this.head.left !== null)
          this.head = currentNode;
        currentNode = this.head.left;
        continue;
      }
      if (data > this.head.data) {
        if (this.head.right !== null)
          this.head = currentNode;
        currentNode = this.head.right;
        continue;
      }
      if (data === this.head.data) return;
    } */
  } 
  
  add(data) {
    if (this.ROOT === null) {
      this.ROOT = new Node(data);
      return;
    }
    this.setupHead(data);
    if (data < this.head.data) {
      this.head.left = new Node(data)
    }
    if (data > this.head.data) {
      this.head.right = new Node(data)
    }
  }

  has(data) {
    this.setupHead(data);
    return this.head.data === data;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);

console.log(tree);

module.exports = {
  BinarySearchTree
};