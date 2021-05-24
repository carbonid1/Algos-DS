class ListNode {
  value: number;
  next: ListNode;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: ListNode;
  tail: ListNode;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  private createNode(value) {
    return new ListNode(value);
  }

  push(value) {
    const node = this.createNode(value);

    if (this.head === null) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return;

    let node = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      while (node.next.next) node = node.next;
      node.next = null;
      this.tail = node;
    }

    this.length--;

    return node.value;
  }

  shift() {
    if (this.length === 0) return;

    const node = this.head;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else this.head = node.next;

    this.length--;

    return node.value;
  }

  unshift(value) {
    const node = this.createNode(value);

    if (this.head === null) this.tail = node;
    else node.next = this.head;

    this.head = node;
    this.length++;

    return this;
  }

  get(index): ListNode | null {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let node = this.head;
    while (count !== index) {
      count++;
      node = node.next;
    }
    return node;
  }
}
