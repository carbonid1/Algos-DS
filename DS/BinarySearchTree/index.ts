import { Queue } from "../Queue";

class BSTNode<T = any> {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  root: BSTNode<T> | null;

  constructor() {
    this.root = null;
  }

  private createNode(value: T) {
    return new BSTNode(value);
  }

  private assignNewNode(newNode: BSTNode, oldNode: BSTNode) {
    if (oldNode.value === newNode.value) return null;
    else if (oldNode.value < newNode.value) {
      if (oldNode.right === null) oldNode.right = newNode;
      else this.assignNewNode(newNode, oldNode.right);
    } else if (oldNode.value > newNode.value) {
      if (oldNode.left === null) oldNode.left = newNode;
      else this.assignNewNode(newNode, oldNode.left);
    }
  }

  insert(value: T) {
    const node = this.createNode(value);
    if (this.root === null) this.root = node;
    else this.assignNewNode(node, this.root);
    return this;
  }

  private _find(value: T, currentNode: BSTNode): BSTNode | null {
    if (currentNode === null) return null;
    else if (currentNode.value < value) return this._find(value, currentNode.right);
    else if (currentNode.value > value) return this._find(value, currentNode.left);
    else return currentNode;
  }

  find(value: T): BSTNode | null {
    if (this.root === null) return null;
    else return this._find(value, this.root);
  }

  private _bfs(values: T[], queue: Queue<BSTNode>): typeof values {
    if (queue.length === 0) return values;
    else {
      const node = queue.dequeue();
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
      values.push(node.value);
      return this._bfs(values, queue);
    }
  }

  // Breadth First Search
  // Bottom -> Down, Left -> Right
  bfs(): T[] {
    if (this.root === null) return [];
    const queue = new Queue<BSTNode>();
    queue.enqueue(this.root);
    return this._bfs([], queue);
  }
}
