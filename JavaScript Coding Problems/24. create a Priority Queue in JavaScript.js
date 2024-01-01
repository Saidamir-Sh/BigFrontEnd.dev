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

// Example Implementation of Basic Queue using Arrays (insufficient for large dataset, because pop, shift, unshift moves the array on memory (ex. movie seats example from Grokking algorithms book on Linked List Chapter))

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

console.log('Queue Array based');
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

// Example Implementation of Basic Queue using Linked List (Efficient for large datasets because)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  // add new node at the end and return
  enqueue(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      // if queue is empty set the first and last element to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // set the last node to new node
      this.last = newNode; // update the last node
    }
    this.size++;
    return this;
  }

  // return the first node
  dequeue() {
    if (this.isEmpty()) return;
    let itemToBeRemoved = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return itemToBeRemoved;
  }

  peek() {
    return this.first;
  }
}

console.log('Queue Linked List');
const queueLinkedList = new QueueLinkedList();
console.log(queueLinkedList.isEmpty());
console.log(queueLinkedList.size);
console.log(queueLinkedList.enqueue(1));
console.log(queueLinkedList.enqueue(2));
console.log(queueLinkedList.enqueue(3));
console.log(queueLinkedList.enqueue(4));
console.log(queueLinkedList.dequeue());
console.log(queueLinkedList.size);



// Priority Queue
console.log("------------ Priority Queue ---------")


// priority queue is another type of queue where each element has a priority assigned to it. In a standard queue, the elements are dequeued based on the order of insertion (FIFO - First In, First Out). However, in a priority queue, the elements are dequeued based on their priority, not the order of insertion.

// Basic Operations of Priority Queue:
// enqueue(item, priority): Adds an item with a given priority to the priority queue.
// dequeue(): Removes and returns the item with the highest priority from the priority queue.
// peek(): Returns the item with the highest priority without removing it.
// isEmpty(): Checks if the priority queue is empty.
// size(): Returns the number of elements in the priority queue.

// enqueue(item, priority): O(log n)
// dequeue(): O(log n)
// peek(): O(1)
// isEmpty(): O(1)
// size(): O(1)



class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    const queueElement = { item, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    return this.isEmpty() ? 'Underflow' : this.items.shift().item;
  }

  peek() {
    return !this.isEmpty() ? this.items[0].item : 'Queue is empty!';
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example Usage:
const pq = new PriorityQueue();
pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 3
console.log(pq.dequeue()); // Output: Task 1
