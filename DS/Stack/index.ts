// LIFO: last in first out

class ListNode<T = number> {
  value: T;
  next: ListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Stack<T> {
  head: ListNode<T>;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  private createNode(value: T) {
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

  push(value: T) {
    const node = this.createNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}
