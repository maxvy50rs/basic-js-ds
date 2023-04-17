const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let start = head;
  let lastUnequal = null;
  while (head.next) {
    if (start.value === k) {
      start = start.next;
      head = start;
    }
    if (head.value === k) {
      lastUnequal.next = head.next;
      head = head.next
    } else {
      lastUnequal = head;
      head = head.next
    }
    console.log(`head: ${head}`, `start: ${start}`, `lasUnequal: ${lastUnequal}`)
  }
  if (head.value === k) lastUnequal.next = null;
  return start
}

module.exports = {
  removeKFromList
};
