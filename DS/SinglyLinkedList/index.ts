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

  push(value) {
    const node = new ListNode(value);

    if (this.head === null) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.length += 1;
    return this;
  }

  pop(): ListNode["value"] | undefined {
    if (this.length === 0) return undefined;
    this.length -= 1;

    let nextTail = this.head;
    while (nextTail.next.next) nextTail = nextTail.next;
    nextTail.next = null;
    this.tail = nextTail;

    return nextTail.value;
  }
}
