class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: BSTNode["value"]) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  private createNode(value: BSTNode["value"]) {
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

  private _find(value: BSTNode["value"], currentNode: BSTNode): BSTNode | null {
    if (currentNode === null) return null;
    else if (currentNode.value < value) return this._find(value, currentNode.right);
    else if (currentNode.value > value) return this._find(value, currentNode.left);
    else return currentNode;
  }

  insert(value: BSTNode["value"]) {
    const node = this.createNode(value);
    if (this.root === null) this.root = node;
    else this.assignNewNode(node, this.root);
    return this;
  }

  find(value: BSTNode["value"]): BSTNode | null {
    if (this.root === null) return null;
    else return this._find(value, this.root);
  }
}
