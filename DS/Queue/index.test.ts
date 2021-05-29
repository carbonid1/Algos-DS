import { Queue } from "./index";

const nodes = { a: "A", b: "B", c: "C", d: "D" };

describe("Doubly Linked List", () => {
  it("should create a queue", () => {
    const queue = new Queue();

    expect(queue.head).toEqual(null);
    expect(queue.length).toEqual(0);
  });

  describe("adding nodes", () => {
    it("adds a single node", () => {
      const queue = new Queue();
      queue.enqueue(nodes.a);

      expect(queue.length).toBe(1);
      expect(queue.head.value).toBe(nodes.a);
      expect(queue.tail.value).toBe(nodes.a);
      expect(queue.head.next).toBe(null);
    });

    it("adds two nodes", () => {
      const queue = new Queue();
      queue.enqueue(nodes.a);
      queue.enqueue(nodes.b);

      expect(queue.length).toBe(2);
      expect(queue.head.value).toBe(nodes.a);
      expect(queue.tail.value).toBe(nodes.b);
    });

    it("adds three nodes", () => {
      const queue = new Queue();
      queue.enqueue(nodes.a);
      queue.enqueue(nodes.b);
      queue.enqueue(nodes.c);

      expect(queue.length).toBe(3);
      expect(queue.head.value).toBe(nodes.a);
      expect(queue.tail.value).toBe(nodes.c);
    });
  });

  describe("removing nodes", () => {
    it("should remove the first node", () => {
      const queue = new Queue();
      queue.enqueue(nodes.a);
      queue.enqueue(nodes.b);
      queue.enqueue(nodes.c);
      queue.dequeue();

      expect(queue.length).toBe(2);
      expect(queue.head.value).toBe(nodes.b);
      expect(queue.tail.value).toBe(nodes.c);
    });

    it("should shift the single node", () => {
      const queue = new Queue();
      queue.enqueue(nodes.a);
      queue.dequeue();

      expect(queue.length).toBe(0);
      expect(queue.head).toBe(null);
    });
  });
});
