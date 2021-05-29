// LIFO: last in first out

class ListNode {
  value: number;
  next: ListNode;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  head: ListNode;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  private createNode(value) {
    return new ListNode(value);
  }

  pop() {
    if (this.length === 0) return;
    const node = this.head;
    if (this.length === 1) this.head = null;
    else this.head = node.next;
    this.length--;
    return node.value;
  }

  push(value) {
    const node = this.createNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}
