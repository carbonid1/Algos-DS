import { DoublyLinkedList } from "./index";

const nodes = { a: "A", b: "B", c: "C", d: "D" };

describe("Doubly Linked List", () => {
  it("should create a list", () => {
    const list = new DoublyLinkedList();

    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });

  it("should add a single node", () => {
    const list = new DoublyLinkedList();
    list.push(nodes.a);

    expect(list.length).toEqual(1);
    expect(list.head.value).toEqual(nodes.a);
    expect(list.tail.value).toEqual(nodes.a);
  });

  it("should add two nodes", () => {
    const list = new DoublyLinkedList();
    list.push(nodes.a);
    list.push(nodes.b);

    expect(list.length).toEqual(2);
    expect(list.head.prev).toEqual(null);
    expect(list.head.next.value).toEqual(nodes.b);
    expect(list.tail.prev.value).toEqual(nodes.a);
    expect(list.tail.next).toEqual(null);
  });

  it("should add three nodes", () => {
    const list = new DoublyLinkedList();
    list.push(nodes.a);
    list.push(nodes.b);
    list.push(nodes.c);

    expect(list.length).toEqual(3);
    expect(list.head.value).toEqual(nodes.a);
    expect(list.tail.prev.value).toEqual(nodes.b);
    expect(list.tail.value).toEqual(nodes.c);
  });

  it("should move the tail back", () => {
    const list = new DoublyLinkedList();
    list.push(nodes.a);
    list.push(nodes.b);
    list.push(nodes.c);
    list.pop();

    expect(list.length).toBe(2);
    expect(list.tail.value).toBe(nodes.b);
    expect(list.tail.prev.value).toBe(nodes.a);
  });

  it("should pop the only node", () => {
    const list = new DoublyLinkedList();
    list.push(nodes.a);
    list.pop();

    expect(list.length).toBe(0);
    expect(list.tail).toBe(null);
    expect(list.head).toBe(null);
  });

  it("should shift the list", () => {
    const list = new DoublyLinkedList();
    list.push(nodes.a);
    list.push(nodes.b);
    list.push(nodes.c);
    list.shift();

    expect(list.length).toBe(2);
    expect(list.head.value).toBe(nodes.b);
  });

  it("should shift the single node", () => {
    const list = new DoublyLinkedList();
    list.push(nodes.a);
    list.shift();

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  describe("unshift", () => {
    it("adds a single node", () => {
      const list = new DoublyLinkedList();
      list.unshift(nodes.a);

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(nodes.a);
      expect(list.tail.value).toBe(nodes.a);
      expect(list.head.prev).toBe(null);
      expect(list.head.next).toBe(null);
    });

    it("adds two nodes", () => {
      const list = new DoublyLinkedList();
      list.unshift(nodes.a);
      list.unshift(nodes.b);

      expect(list.length).toBe(2);
      expect(list.head.value).toBe(nodes.b);
      expect(list.tail.value).toBe(nodes.a);
      expect(list.head.next.value).toBe(nodes.a);
      expect(list.tail.prev.value).toBe(nodes.b);
    });

    it("adds three nodes", () => {
      const list = new DoublyLinkedList();
      list.unshift(nodes.a);
      list.unshift(nodes.b);
      list.unshift(nodes.c);

      expect(list.length).toBe(3);
      expect(list.head.value).toBe(nodes.c);
      expect(list.tail.value).toBe(nodes.a);
      expect(list.head.next.value).toBe(nodes.b);
      expect(list.tail.prev.value).toBe(nodes.b);
    });
  });

  describe("get", () => {
    it("it returns a correct node", () => {
      const list = new DoublyLinkedList();
      list.push(nodes.a);
      list.push(nodes.b);
      list.push(nodes.c);
      list.push(nodes.d);

      expect(list.length).toBe(4);
      expect(list.get(-1)).toBe(null);
      expect(list.get(4)).toBe(null);
      expect(list.get(0).value).toBe(nodes.a);
      expect(list.get(2).value).toBe(nodes.c);
      expect(list.get(3).value).toBe(nodes.d);
    });
  });

  describe("set", () => {
    it("changes the correct node", () => {
      const list = new DoublyLinkedList();
      list.push(nodes.a);
      list.push(nodes.b);
      list.push(nodes.c);
      list.set(nodes.d, 1);
      expect(list.get(1).value).toBe(nodes.d);
    });

    it("doesn't change a node if index doesn't exist", () => {
      const list = new DoublyLinkedList();
      const nonexistentIndex = 404;
      list.push(nodes.a);
      list.push(nodes.b);
      list.set(nodes.c, nonexistentIndex);
      expect(list.get(nonexistentIndex)).toBe(null);
    });
  });

  describe("insert", () => {
    it("inserts at the correct position", () => {
      const list = new DoublyLinkedList();
      list.push(nodes.a);
      list.push(nodes.b);
      list.insert(nodes.c, 1);

      expect(list.length).toBe(3);
      expect(list.get(0).value).toBe(nodes.a);
      expect(list.get(0).next.value).toBe(nodes.c);
      expect(list.get(1).value).toBe(nodes.c);
      expect(list.get(1).prev.value).toBe(nodes.a);
      expect(list.get(1).next.value).toBe(nodes.b);
      expect(list.get(2).value).toBe(nodes.b);
      expect(list.get(2).prev.value).toBe(nodes.c);
    });

    it("should insert at 0 index", () => {
      const list = new DoublyLinkedList();
      list.push(nodes.b);
      list.insert(nodes.a, 0);

      expect(list.length).toBe(2);
      expect(list.get(0).value).toBe(nodes.a);
      expect(list.get(1).value).toBe(nodes.b);
    });

    it("should insert at the end", () => {
      const list = new DoublyLinkedList();
      list.push(nodes.c);
      list.push(nodes.b);
      list.insert(nodes.a, 2);

      expect(list.length).toBe(3);
      expect(list.get(2).value).toBe(nodes.a);
    });

    it("shouldn't insert a node if index not exist", () => {
      const list = new DoublyLinkedList();
      const nonexistentIndex = 404;
      list.push(nodes.c);
      list.push(nodes.b);
      list.insert(nodes.a, nonexistentIndex);

      expect(list.length).toBe(2);
      expect(list.get(nonexistentIndex)).toBe(null);
    });
  });

  describe("remove", () => {
    it("removes at the end", () => {
      const list = new DoublyLinkedList();
      const index = 1;
      list.push(nodes.b);
      list.push(nodes.a);
      list.remove(index);

      expect(list.length).toBe(1);
      expect(list.get(index)).toBe(null);
    });

    it("removes at the start", () => {
      const list = new DoublyLinkedList();
      const index = 0;
      list.push(nodes.b);
      list.push(nodes.a);
      list.remove(index);

      expect(list.length).toBe(1);
      expect(list.get(index).value).toBe(nodes.a);
    });

    it("removes in the middle", () => {
      const list = new DoublyLinkedList();
      const index = 1;
      list.push(nodes.a);
      list.push(nodes.b);
      list.push(nodes.c);
      list.remove(index);

      expect(list.length).toBe(2);
      expect(list.get(index).value).toBe(nodes.c);
    });

    it("shouldn't remove if index doesn't exist", () => {
      const list = new DoublyLinkedList();
      const nonexistentIndex = 404;
      list.push(nodes.a);
      list.push(nodes.b);
      list.push(nodes.c);
      list.remove(nonexistentIndex);

      expect(list.length).toBe(3);
    });
  });

  // it("should reverse the list", () => {
  //   const list = new DoublyLinkedList();
  //   const xyz = "xyz";
  //   const hello = "hello";
  //   const nodes.b = "nodes.b";
  //   const nodes.a = "nodes.a";
  //   list.push(xyz);
  //   list.push(hello);
  //   list.push(nodes.b);
  //   list.push(nodes.a);
  //   list.reverse();

  //   expect(list.get(0).value).toBe(nodes.a);
  //   expect(list.get(1).value).toBe(nodes.b);
  //   expect(list.get(2).value).toBe(hello);
  //   expect(list.get(3).value).toBe(xyz);
  //   expect(list.get(3).next).toBe(null);
  // });

  // it("should reverse the list with a single item", () => {
  //   const list = new DoublyLinkedList();
  //   const xyz = "xyz";
  //   list.push(xyz);
  //   list.reverse();

  //   expect(list.get(0).value).toBe(xyz);
  // });

  // it("should reverse an empty list", () => {
  //   const list = new DoublyLinkedList();
  //   list.reverse();

  //   expect(list.length).toBe(0);
  // });
});
