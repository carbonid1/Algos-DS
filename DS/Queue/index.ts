// FIFO: first in first out

class ListNode<T = any> {
  value: T;
  next: ListNode<T>;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  private createNode(value) {
    return new ListNode(value);
  }

  dequeue(): T {
    if (this.length === 0) return;

    const node = this.head;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else this.head = node.next;

    this.length--;

    return node.value;
  }

  enqueue(value: T) {
    const node = this.createNode(value);

    if (this.head === null) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.length++;

    return this;
  }
}
