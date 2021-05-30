import { BinarySearchTree } from ".";

const nodes = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

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
});
