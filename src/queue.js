const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (this.tail) {
      let newNode = new ListNode(value);
      this.tail.next = newNode;
      this.tail = newNode
    } else {
      this.tail = new ListNode(value);
      this.head = this.tail
    }
    /* console.log(`head: ${this.head}`, `tail: ${this.tail}`) */
  }

  dequeue() {
    if (this.head) {
      let head = this.head;
      this.head = this.head.next;
      return head.value
    }
  }
}

const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
console.log(queue);

module.exports = {
  Queue
};
