// Priority Queue is a commonly used data structure in algorithm problem. Especially useful for Top K problem with a huge amount of input data, since it could avoid sorting the whole but keep a fixed-length sorted portion of it.
// Since there is no built-in Priority Queue in JavaScript, in a real interview, you should tell interview saying that "Suppose we already have a Priority Queue Class I can use", there is no time for you to write a Priority Queue from scratch.

// But it is a good coding problem to practice, so please implement a Priority Queue with following interface

class PriorityQueue {
  // compare is a function defines the priority, which is the order
  // the elements closer to first element is sooner to be removed.
  constructor(compare) {
  
  }
  
  // add a new element to the queue
  // you need to put it in the right order
  add(element) {

  }

  // remove the head element and return
  poll() {
  
  }

  // get the head element
  peek() {

  }

  // get the amount of items in the queue
  size() {

  }
}
// Here is an example to make it clearer

const pq = new PriorityQueue((a, b) => a - b)
// (a, b) => a - b means
// smaller numbers are closer to index:0
// which means smaller number are to be removed sooner

pq.add(5)
// now 5 is the only element

pq.add(2)
// 2 added

pq.add(1)
// 1 added

pq.peek()
// since smaller number are sooner to be removed
// so this gives us 1

pq.poll()
// 1 
// 1 is removed, 2 and 5 are left

pq.peek()
// 2 is the smallest now, this returns 2

pq.poll()
// 2 
// 2 is removed, only 5 is left







// complete the implementation
class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare - 
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare;
  }

  /**
   * return {number} amount of items
   */
  size() {

  }

  /**
   * returns the head element
   */
  peek() {

  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
   
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    
  }
}

console.log('--------------------   Solution Logs   --------------------');

console.log('--------------------   Explanation Logs   --------------------');

// Queue is fundamental data structure (considered Abstract Data type) (linear data structure), uses FIFO(first in, first out) principle

// Basic operations:
// enqueue -> add & return item at the end of the queue
// dequeue -> remove & return item from front, first item of the queue
// peek -> return front item in queue (first item)
// isEmpty -> check if queue is empty
// size -> return size of the queue

// Implementation
// Queue can be implemented based on array, linked-list, heap, and BST data structure (mostly array and linked list but depend on the operations you want to use on it since time and space complexity differs for each data strture)

// Time and space complexity of Queue

//                     | Intsert  |  Delete   |   Access  |   Search
// Queue (array-based) |  O(1)    |   O(1)    |     O(n)  |    O(n)

// Example Implementation of Basic Queue using Arrays (insufficient for large dataset)

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item); // return array.push  -> returns new length of the array
  }

  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }

  peek() {
    return !this.isEmpty() ? this.items[0] : 'Queue is empty !';
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const basicQueue = new Queue();

console.log(basicQueue.isEmpty()); // true
console.log(basicQueue.size()); // 0
console.log(basicQueue.peek()); // Queue is empty !
console.log(basicQueue.enqueue(1)); // logs undefined this we are not returning any type
console.log(basicQueue.enqueue(2)); // logs undefined this we are not returning any type
console.log(basicQueue.enqueue(3)); // logs undefined this we are not returning any type
console.log(basicQueue.enqueue(4)); // logs undefined this we are not returning any type
console.log(basicQueue.enqueue(5)); // logs undefined this we are not returning any type
console.log(basicQueue.size()); // 5 // size of items in queue
console.log(basicQueue.dequeue()); // 1 front item removed

// Example Implementation of Basic Queue using Linked List
