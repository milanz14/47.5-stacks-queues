/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // enqueue is the same as 'push' in a regular linked list
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this;
    // return this returns the entire list - why is the problem statement asking to return undefined?
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // dequeue is the same as 'shift' in a regular linked list
    if (this.size === 0) {
      throw new Error('Cannot remove node from the start - the Queue is empty')
    } 
    let removedNode = this.first;
    this.first = removedNode.next;
    this.size -= 1;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) return undefined;
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    return false;
  }
}

module.exports = Queue;
