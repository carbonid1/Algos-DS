class ListNode {
  value: number;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
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
    node.prev = this.tail;

    if (this.head === null) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return;

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail.value;
  }

  shift() {
    if (this.length === 0) return;

    const oldHead = this.head;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
    }

    this.length--;

    return oldHead.value;
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

  set(value, index = 0): boolean {
    const node = this.get(index);
    const isNodeExist = node !== null;
    if (isNodeExist) node.value = value;
    return isNodeExist;
  }

  insert(value, index = 0): boolean {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) this.unshift(value);
    else if (index === this.length) this.push(value);
    else {
      const newNode = this.createNode(value);
      const prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index: number): ListNode["value"] | null {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.shift();
    else {
      const prevNode = this.get(index - 1);
      const nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;
      this.length--;
      return nodeToRemove.value;
    }
  }

  reverse() {
    const prevHead = this.head;
    const prevTail = this.tail;
    // this.tail = { value: prevHead?.value, next: null };
    // this.head = { value: prevTail?.value, next: this.tail };

    let node = prevHead?.next;
    while (node?.next) {
      // this.head.next = { value: node.value, next: this.head.next };
      node = node.next;
    }
  }
}
