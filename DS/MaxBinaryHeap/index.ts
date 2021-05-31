export class MaxBinaryHeap<T> {
  values: T[];

  constructor() {
    this.values = [];
  }

  private findParentIndex(childIndex): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private bubleUp(childIndex) {
    const parentIndex = this.findParentIndex(childIndex);
    const parentValue = this.values[parentIndex];
    const childValue = this.values[childIndex];
    if (childValue > parentValue) {
      this.values.splice(childIndex, 1, parentValue);
      this.values.splice(parentIndex, 1, childValue);
      if (parentIndex > 0) this.bubleUp(parentIndex);
    }
  }

  insert(value: T) {
    const childIndex = this.values.push(value);
    this.bubleUp(childIndex - 1);
  }

  private getChild(parentIndex): { index: number; value: T } {
    const leftChildIndex = 2 * parentIndex + 1;
    const rightChildIndex = 2 * parentIndex + 2;
    const leftChildValue = this.values[leftChildIndex];
    const rightChildValue = this.values[rightChildIndex];
    if (leftChildValue > rightChildValue) {
      return { index: leftChildIndex, value: leftChildValue };
    } else {
      return { index: rightChildIndex, value: rightChildValue };
    }
  }

  private bubleDown(parentIndex) {
    const { index: childIndex, value: childValue } = this.getChild(parentIndex);
    const parentValue = this.values[parentIndex];
    if (childValue > parentValue) {
      this.values.splice(childIndex, 1, parentValue);
      this.values.splice(parentIndex, 1, childValue);
      this.bubleDown(childIndex);
    }
  }

  extractMax() {
    if (this.values.length) {
      const popedValue = this.values.pop();
      this.values.splice(0, 1, popedValue);
      this.bubleDown(0);
    }
  }
}
