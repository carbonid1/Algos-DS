import { Stack } from "./index";

const nodes = { a: "A", b: "B", c: "C", d: "D" };

describe("Stack", () => {
  it("should create a stack", () => {
    const list = new Stack();

    expect(list.head).toEqual(null);
    expect(list.length).toEqual(0);
  });

  describe("adding nodes", () => {
    it("adds a single node", () => {
      const list = new Stack();
      list.push(nodes.a);

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(nodes.a);
      expect(list.head.next).toBe(null);
    });

    it("adds two nodes", () => {
      const list = new Stack();
      list.push(nodes.a);
      list.push(nodes.b);

      expect(list.length).toBe(2);
      expect(list.head.value).toBe(nodes.b);
      expect(list.head.next.value).toBe(nodes.a);
    });

    it("adds three nodes", () => {
      const list = new Stack();
      list.push(nodes.a);
      list.push(nodes.b);
      list.push(nodes.c);

      expect(list.length).toBe(3);
      expect(list.head.value).toBe(nodes.c);
      expect(list.head.next.value).toBe(nodes.b);
    });
  });

  describe("removing nodes", () => {
    it("should remove the first node", () => {
      const list = new Stack();
      list.push(nodes.a);
      list.push(nodes.b);
      list.push(nodes.c);
      list.pop();

      expect(list.length).toBe(2);
      expect(list.head.value).toBe(nodes.b);
    });

    it("should shift the single node", () => {
      const list = new Stack();
      list.push(nodes.a);
      list.pop();

      expect(list.length).toBe(0);
      expect(list.head).toBe(null);
    });
  });
});
