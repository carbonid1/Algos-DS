import { Graph } from "./index";

describe("Graph", () => {
  describe("Deapth First Search", () => {
    it("returns an empty array if the vertex isn't found", () => {
      const A = Symbol("A");
      const B = Symbol("B");
      const graph = new Graph();
      graph.addVertex(A);

      expect(graph.dfs(B)).toEqual([]);
    });

    it("creates an adjacency list", () => {
      const A = Symbol("A");
      const B = Symbol("B");
      const C = Symbol("C");
      const D = Symbol("D");
      const E = Symbol("E");
      const F = Symbol("F");
      const graph = new Graph();
      graph.addEdges(A, B);
      graph.addEdges(A, C);
      graph.addEdges(B, D);
      graph.addEdges(C, E);
      graph.addEdges(D, E);
      graph.addEdges(D, F);
      graph.addEdges(E, F);

      expect(graph.dfs(A)).toEqual([A, B, D, E, C, F]);
    });
  });
});
