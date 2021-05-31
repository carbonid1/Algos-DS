import { MaxBinaryHeap } from ".";

describe("MaxBinaryHeap", () => {
  it("creates a heap", () => {
    const heap = new MaxBinaryHeap();

    expect(heap.values).toEqual([]);
  });

  describe("insert", () => {
    it("insterts a value to an empty heap", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(1);

      expect(heap.values).toEqual([1]);
    });

    it("insterts three sorted values", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(55);
      heap.insert(44);
      heap.insert(33);

      expect(heap.values).toEqual([55, 44, 33]);
    });

    it("insterts five unsorted values", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(5);
      heap.insert(4);
      heap.insert(7);
      heap.insert(9);
      heap.insert(1);

      expect(heap.values).toEqual([9, 7, 5, 4, 1]);
    });
  });

  describe("remove root", () => {
    it("handles an empty heap", () => {
      const heap = new MaxBinaryHeap();
      heap.extractMax();

      expect(heap.values).toEqual([]);
    });

    it("removes a value", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(41);
      heap.insert(39);
      heap.insert(33);
      heap.insert(18);
      heap.insert(27);
      heap.insert(12);
      heap.extractMax();

      expect(heap.values).toEqual([39, 27, 33, 18, 12]);
    });

    it("removes a value twice", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(41);
      heap.insert(39);
      heap.insert(33);
      heap.insert(18);
      heap.insert(27);
      heap.insert(12);
      heap.extractMax();
      heap.extractMax();

      expect(heap.values).toEqual([33, 27, 12, 18]);
    });
  });
});
