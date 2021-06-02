import { Graph } from "./index";

describe("Graph", () => {
  it("creates an adjacency list", () => {
    const graph = new Graph();

    // expect(graph.adjacencyList).toEqual(new Map());
  });

  it("adds a vertex", () => {
    const graph = new Graph();
    const Andrii = Symbol("Andrii");
    graph.addVertex(Andrii);

    // expect(graph.adjacencyList.).toEqual(new Map());
  });
});
