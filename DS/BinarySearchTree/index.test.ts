import { BinarySearchTree } from ".";

const nodes = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 3.5 };

describe("Binary Search Tree", () => {
  it("creates a tree", () => {
    const bst = new BinarySearchTree();

    expect(bst.root).toBe(null);
  });

  describe("insert", () => {
    it("creates root node if there is none", () => {
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);

      expect(bst.root.value).toBe(nodes.c);
    });

    it("assigns nodes based on value", () => {
      //        3(c)
      //    2(b)    4(d)
      //  1(a)
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);
      bst.insert(nodes.d);
      bst.insert(nodes.b);
      bst.insert(nodes.a);

      expect(bst.root.value).toBe(nodes.c);
      expect(bst.root.right.value).toBe(nodes.d);
      expect(bst.root.left.value).toBe(nodes.b);
      expect(bst.root.left.left.value).toBe(nodes.a);
    });
  });

  describe("find", () => {
    it("returns null if there is no root", () => {
      const bst = new BinarySearchTree();

      expect(bst.find(2)).toBe(null);
    });

    it("returns null if there is no such value in the tree", () => {
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);
      bst.insert(nodes.d);
      bst.insert(nodes.b);
      bst.insert(nodes.a);

      expect(bst.find(404)).toBe(null);
    });

    it("returns found value", () => {
      //        3(c)
      //    2(b)    4(d)
      //  1(a)
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);
      bst.insert(nodes.d);
      bst.insert(nodes.b);
      bst.insert(nodes.a);

      expect(bst.find(2)).toEqual({
        value: 2,
        left: { value: 1, left: null, right: null },
        right: null,
      });
    });
  });

  describe("Breadth First Search", () => {
    it("returns an empty array if the tree is empty", () => {
      const bst = new BinarySearchTree();

      expect(bst.bfs()).toEqual([]);
    });

    it("returns an array of bfs ordered values", () => {
      //        3(c)
      //    2(b)    4(d)
      //  1(a)   3.5(f) 5(e)
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);
      bst.insert(nodes.d);
      bst.insert(nodes.b);
      bst.insert(nodes.a);
      bst.insert(nodes.e);
      bst.insert(nodes.f);

      expect(bst.bfs()).toEqual([nodes.c, nodes.b, nodes.d, nodes.a, nodes.f, nodes.e]);
    });
  });

  describe("Depth First Pre Order Search", () => {
    it("returns an empty array if the tree is empty", () => {
      const bst = new BinarySearchTree();

      expect(bst.dFPreOrderS()).toEqual([]);
    });

    it("returns the ordered values", () => {
      //        3(c)
      //    2(b)    4(d)
      //  1(a)   3.5(f) 5(e)
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);
      bst.insert(nodes.d);
      bst.insert(nodes.b);
      bst.insert(nodes.a);
      bst.insert(nodes.e);
      bst.insert(nodes.f);

      expect(bst.dFPreOrderS()).toEqual([nodes.c, nodes.b, nodes.a, nodes.d, nodes.f, nodes.e]);
    });
  });

  describe("Depth First Post Order Search", () => {
    it("returns an empty array if the tree is empty", () => {
      const bst = new BinarySearchTree();

      expect(bst.dFPostOrderS()).toEqual([]);
    });

    it("returns the ordered values", () => {
      //        3(c)
      //    2(b)    4(d)
      //  1(a)   3.5(f) 5(e)
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);
      bst.insert(nodes.d);
      bst.insert(nodes.b);
      bst.insert(nodes.a);
      bst.insert(nodes.e);
      bst.insert(nodes.f);

      expect(bst.dFPostOrderS()).toEqual([nodes.a, nodes.b, nodes.f, nodes.e, nodes.d, nodes.c]);
    });
  });

  describe("Depth First In Order Search", () => {
    it("returns an empty array if the tree is empty", () => {
      const bst = new BinarySearchTree();

      expect(bst.dFPostOrderS()).toEqual([]);
    });

    it("returns the ordered values", () => {
      //        3(c)
      //    2(b)    4(d)
      //  1(a)   3.5(f) 5(e)
      const bst = new BinarySearchTree();
      bst.insert(nodes.c);
      bst.insert(nodes.d);
      bst.insert(nodes.b);
      bst.insert(nodes.a);
      bst.insert(nodes.e);
      bst.insert(nodes.f);

      expect(bst.dFInOrderS()).toEqual([nodes.a, nodes.b, nodes.c, nodes.f, nodes.d, nodes.e]);
    });
  });
});
