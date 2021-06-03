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
      graph.addEdges(A, B, 0);
      graph.addEdges(A, C, 0);
      graph.addEdges(B, D, 0);
      graph.addEdges(C, E, 0);
      graph.addEdges(D, E, 0);
      graph.addEdges(D, F, 0);
      graph.addEdges(E, F, 0);

      expect(graph.dfs(A)).toEqual([A, B, D, E, C, F]);
    });
  });

  describe("Breadth First Search", () => {
    it("returns an empty array if the vertex isn't found", () => {
      const A = Symbol("A");
      const B = Symbol("B");
      const graph = new Graph();
      graph.addVertex(A);

      expect(graph.bfs(B)).toEqual([]);
    });

    it("creates an adjacency list", () => {
      const A = Symbol("A");
      const B = Symbol("B");
      const C = Symbol("C");
      const D = Symbol("D");
      const E = Symbol("E");
      const F = Symbol("F");
      const G = Symbol("G");
      const graph = new Graph();
      graph.addEdges(A, B, 0);
      graph.addEdges(A, E, 0);
      graph.addEdges(B, C, 0);
      graph.addEdges(C, D, 0);
      graph.addEdges(D, E, 0);
      graph.addEdges(D, F, 0);
      graph.addEdges(E, F, 0);
      graph.addEdges(A, G, 0);

      expect(graph.bfs(A)).toEqual([A, B, E, G, C, D, F]);
    });
  });
});
