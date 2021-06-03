/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // push for a linked list Stack is the same as 'unshift' for a singly linked list
    let pushedNode = new Node(val);
    if (this.size === 0) {
      this.first = pushedNode;
      this.last = pushedNode;
    } else {
      pushedNode.next = this.first;
      this.first = pushedNode;
    }
    this.size += 1;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // pop for a linked list Stack is the same as 'shift' for a singly linked list
    if (this.size === 0) return undefined;
    let poppedNode = this.first;
    poppedNode.next = this.first;
    this.size -= 1;
    if (this.size === 0) {
      this.last = null;
    }
    return poopedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) return undefined;
    return this.first.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
