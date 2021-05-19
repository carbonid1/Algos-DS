import { SinglyLinkedList } from "./index";

test("should create a SLL", () => {
  const sll = new SinglyLinkedList();

  expect(sll.head).toEqual(null);
  expect(sll.tail).toEqual(null);
  expect(sll.length).toEqual(0);
});

test("should add a single node", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.push(firstNode);

  expect(sll.length).toEqual(1);
  expect(sll.head.value).toEqual(firstNode);
  expect(sll.tail.value).toEqual(firstNode);
});

test("should add two nodes", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.push(firstNode);
  const secondNode = 2;
  sll.push(secondNode);

  expect(sll.length).toEqual(2);
  expect(sll.head.value).toEqual(firstNode);
  expect(sll.tail.value).toEqual(secondNode);
  expect(sll.head.next.value).toEqual(secondNode);
});

test("should add three nodes", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.push(firstNode);
  const secondNode = 2;
  sll.push(secondNode);
  const thirdNode = 3;
  sll.push(thirdNode);

  expect(sll.tail.value).toEqual(thirdNode);
  expect(sll.head.next.value).toEqual(secondNode);
  expect(sll.head.next.next.value).toEqual(thirdNode);
});

test("should move the tail back", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.push(firstNode);
  const secondNode = 2;
  sll.push(secondNode);
  const thirdNode = 3;
  sll.push(thirdNode);
  sll.pop();

  expect(sll.length).toBe(2);
  expect(sll.tail.value).toBe(secondNode);
});

test("should pop the last node", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.push(firstNode);
  sll.pop();

  expect(sll.length).toBe(0);
  expect(sll.tail).toBe(null);
  expect(sll.head).toBe(null);
});

test("should move the head forward", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.push(firstNode);
  const secondNode = 2;
  sll.push(secondNode);
  const thirdNode = 3;
  sll.push(thirdNode);
  sll.shift();

  expect(sll.length).toBe(2);
  expect(sll.head.value).toBe(secondNode);
});

test("should shift the single node", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.push(firstNode);
  sll.shift();

  expect(sll.length).toBe(0);
  expect(sll.head).toBe(null);
  expect(sll.tail).toBe(null);
});

test("should unshift a single node", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  sll.unshift(firstNode);

  expect(sll.length).toBe(1);
  expect(sll.head.value).toBe(firstNode);
  expect(sll.tail.value).toBe(firstNode);
});

test("should unshift two nodes", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  const secondNode = 2;
  sll.unshift(firstNode);
  sll.unshift(secondNode);

  expect(sll.length).toBe(2);
  expect(sll.head.value).toBe(secondNode);
  expect(sll.tail.value).toBe(firstNode);
});

test("should unshift three nodes", () => {
  const sll = new SinglyLinkedList();
  const firstNode = 1;
  const secondNode = 2;
  const thirdNode = 3;
  sll.unshift(firstNode);
  sll.unshift(secondNode);
  sll.unshift(thirdNode);

  expect(sll.head.value).toBe(thirdNode);
  expect(sll.head.next.value).toBe(secondNode);
  expect(sll.tail.value).toBe(firstNode);
});
