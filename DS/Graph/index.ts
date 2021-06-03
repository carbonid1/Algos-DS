import { Queue } from "../Queue";

// vertex === node
// edge === conncetion
export class Graph<T = Symbol> {
  private list: Map<T, T[]>;

  constructor() {
    this.list = new Map();
  }

  addVertex(vertex: T) {
    if (!this.list.has(vertex)) this.list.set(vertex, []);
  }

  private addEdge(vertex1: T, vertex2: T) {
    this.addVertex(vertex1);
    this.list.get(vertex1)?.push(vertex2);
  }

  addEdges(vertex1: T, vertex2: T) {
    this.addEdge(vertex1, vertex2);
    this.addEdge(vertex2, vertex1);
  }

  private removeEdge(vertex1: T, vertex2: T) {
    const keyValues = this.list.get(vertex1) ?? [];
    const filteredValues = keyValues.filter((vertex) => vertex !== vertex2);
    this.list.set(vertex1, filteredValues);
  }

  removeEdges(vertex1: T, vertex2: T) {
    this.removeEdge(vertex1, vertex2);
    this.removeEdge(vertex2, vertex1);
  }

  removeVertex(vertex: T) {
    const edges = this.list.get(vertex) ?? [];
    edges.forEach((edgeVertex) => this.removeEdge(edgeVertex, vertex));
    this.list.delete(vertex);
  }

  private _dfs(map: Map<T, true>, traversedList: T[]): T[] {
    const edges = this.list.get(traversedList[traversedList.length - 1]);
    edges?.forEach((vertex) => {
      if (!map.has(vertex)) {
        map.set(vertex, true);
        traversedList.push(vertex);
        this._dfs(map, traversedList);
      }
    });
    return traversedList;
  }

  dfs(vertex: T): T[] {
    if (!this.list.has(vertex)) return [];
    const map: Map<T, true> = new Map();
    map.set(vertex, true);
    const traversedList: T[] = [vertex];
    return this._dfs(map, traversedList);
  }

  private _bfs(map: Map<T, true>, traversedList: T[], queue: Queue<T>): T[] {
    const vertex = queue.dequeue();
    traversedList.push(vertex);
    const edges = this.list.get(vertex);

    edges?.forEach((vertex) => {
      if (!map.has(vertex)) {
        map.set(vertex, true);
        queue.enqueue(vertex);
      }
    });

    if (queue.length) return this._bfs(map, traversedList, queue);
    else return traversedList;
  }

  bfs(vertex: T): T[] {
    if (!this.list.has(vertex)) return [];
    const map: Map<T, true> = new Map();
    const queue = new Queue<T>();
    const traversedList: T[] = [];
    map.set(vertex, true);
    queue.enqueue(vertex);
    return this._bfs(map, traversedList, queue);
  }
}
