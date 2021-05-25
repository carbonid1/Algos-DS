import { DoublyLinkedList } from "./index";

test("should create a list", () => {
  const list = new DoublyLinkedList();

  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
  expect(list.length).toEqual(0);
});

// test("should add a single node", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);

//   expect(list.length).toEqual(1);
//   expect(list.head.value).toEqual(firstNode);
//   expect(list.tail.value).toEqual(firstNode);
// });

// test("should add two nodes", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);
//   const secondNode = 2;
//   list.push(secondNode);

//   expect(list.length).toEqual(2);
//   expect(list.head.value).toEqual(firstNode);
//   expect(list.tail.value).toEqual(secondNode);
//   expect(list.head.next.value).toEqual(secondNode);
// });

// test("should add three nodes", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);
//   const secondNode = 2;
//   list.push(secondNode);
//   const thirdNode = 3;
//   list.push(thirdNode);

//   expect(list.tail.value).toEqual(thirdNode);
//   expect(list.head.next.value).toEqual(secondNode);
//   expect(list.head.next.next.value).toEqual(thirdNode);
// });

// test("should move the tail back", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);
//   const secondNode = 2;
//   list.push(secondNode);
//   const thirdNode = 3;
//   list.push(thirdNode);
//   list.pop();

//   expect(list.length).toBe(2);
//   expect(list.tail.value).toBe(secondNode);
// });

// test("should pop the last node", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);
//   list.pop();

//   expect(list.length).toBe(0);
//   expect(list.tail).toBe(null);
//   expect(list.head).toBe(null);
// });

// test("should move the head forward", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);
//   const secondNode = 2;
//   list.push(secondNode);
//   const thirdNode = 3;
//   list.push(thirdNode);
//   list.shift();

//   expect(list.length).toBe(2);
//   expect(list.head.value).toBe(secondNode);
// });

// test("should shift the single node", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);
//   list.shift();

//   expect(list.length).toBe(0);
//   expect(list.head).toBe(null);
//   expect(list.tail).toBe(null);
// });

// test("should unshift a single node", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.unshift(firstNode);

//   expect(list.length).toBe(1);
//   expect(list.head.value).toBe(firstNode);
//   expect(list.tail.value).toBe(firstNode);
// });

// test("should unshift two nodes", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   const secondNode = 2;
//   list.unshift(firstNode);
//   list.unshift(secondNode);

//   expect(list.length).toBe(2);
//   expect(list.head.value).toBe(secondNode);
//   expect(list.tail.value).toBe(firstNode);
// });

// test("should unshift three nodes", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   const secondNode = 2;
//   const thirdNode = 3;
//   list.unshift(firstNode);
//   list.unshift(secondNode);
//   list.unshift(thirdNode);

//   expect(list.head.value).toBe(thirdNode);
//   expect(list.head.next.value).toBe(secondNode);
//   expect(list.tail.value).toBe(firstNode);
// });

// test("should get a correct node", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   list.push(firstNode);
//   const secondNode = 2;
//   list.push(secondNode);
//   const thirdNode = 3;
//   list.push(thirdNode);
//   const fourthNode = 4;
//   list.push(fourthNode);

//   expect(list.length).toBe(4);
//   expect(list.get(-1)).toBe(null);
//   expect(list.get(4)).toBe(null);
//   expect(list.get(0).value).toBe(firstNode);
//   expect(list.get(3).value).toBe(fourthNode);
// });

// test("should set a correct node", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   const secondNode = 2;
//   const thirdNode = 3;
//   const newSecondNode = 4;
//   list.push(firstNode);
//   list.push(secondNode);
//   list.push(thirdNode);
//   list.set(newSecondNode, 1);

//   expect(list.get(1).value).toBe(newSecondNode);
// });

// test("shouldn't set a node if index not exist", () => {
//   const list = new SinglyLinkedList();
//   const firstNode = 1;
//   const secondNode = 2;
//   const thirdNode = 3;
//   list.push(firstNode);
//   list.push(secondNode);
//   list.set(thirdNode, 2);

//   expect(list.get(2)).toBe(null);
// });

// test("should insert a node at the correct position", () => {
//   const list = new SinglyLinkedList();
//   const foo = "foo";
//   const bar = "bar";
//   list.push("Let's go");
//   list.push(foo);
//   list.insert(bar, 1);

//   expect(list.length).toBe(3);
//   expect(list.get(1).value).toBe(bar);
//   expect(list.get(2).value).toBe(foo);
// });

// test("should insert at 0 index", () => {
//   const list = new SinglyLinkedList();
//   const foo = "foo";
//   const bar = "bar";
//   list.push(foo);
//   list.insert(bar, 0);

//   expect(list.length).toBe(2);
//   expect(list.get(0).value).toBe(bar);
//   expect(list.get(1).value).toBe(foo);
// });

// test("should insert at the end", () => {
//   const list = new SinglyLinkedList();
//   const foo = "foo";
//   const bar = "bar";
//   list.push("Hello World");
//   list.push(foo);
//   list.insert(bar, 2);

//   expect(list.length).toBe(3);
//   expect(list.get(2).value).toBe(bar);
// });

// test("shouldn't insert a node if index not exist", () => {
//   const list = new SinglyLinkedList();
//   const foo = "foo";
//   const bar = "bar";
//   list.push("Let's go");
//   list.push(foo);
//   list.insert(bar, 404);

//   expect(list.length).toBe(2);
//   expect(list.get(404)).toBe(null);
// });

// test("should remove at the end", () => {
//   const list = new SinglyLinkedList();
//   const foo = "foo";
//   const bar = "bar";
//   const index = 1;
//   list.push(foo);
//   list.push(bar);
//   list.remove(index);

//   expect(list.length).toBe(1);
//   expect(list.get(index)).toBe(null);
// });

// test("should remove at the start", () => {
//   const list = new SinglyLinkedList();
//   const foo = "foo";
//   const bar = "bar";
//   const index = 0;
//   list.push(foo);
//   list.push(bar);
//   list.remove(index);

//   expect(list.length).toBe(1);
//   expect(list.get(index).value).toBe(bar);
// });

// test("should remove in the middle", () => {
//   const list = new SinglyLinkedList();
//   const foo = "foo";
//   const bar = "bar";
//   const index = 1;
//   list.push("Let's go");
//   list.push(foo);
//   list.push(bar);
//   list.remove(index);

//   expect(list.length).toBe(2);
//   expect(list.get(index).value).toBe(bar);
// });

// test("shouldn't remove if index doesn't exist", () => {
//   const list = new SinglyLinkedList();
//   list.push("Let's go");
//   list.push("foo");
//   list.push("bar");
//   list.remove(404);

//   expect(list.length).toBe(3);
// });

// test("should reverse the list", () => {
//   const list = new SinglyLinkedList();
//   const xyz = "xyz";
//   const hello = "hello";
//   const foo = "foo";
//   const bar = "bar";
//   list.push(xyz);
//   list.push(hello);
//   list.push(foo);
//   list.push(bar);
//   list.reverse();

//   expect(list.get(0).value).toBe(bar);
//   expect(list.get(1).value).toBe(foo);
//   expect(list.get(2).value).toBe(hello);
//   expect(list.get(3).value).toBe(xyz);
//   expect(list.get(3).next).toBe(null);
// });

// test("should reverse the list with a single item", () => {
//   const list = new SinglyLinkedList();
//   const xyz = "xyz";
//   list.push(xyz);
//   list.reverse();

//   expect(list.get(0).value).toBe(xyz);
// });

// test("should reverse an empty list", () => {
//   const list = new SinglyLinkedList();
//   list.reverse();

//   expect(list.length).toBe(0);
// });
