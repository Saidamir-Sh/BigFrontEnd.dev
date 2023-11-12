// In JavaScript, we could use array to work as both a Stack or a queue.

// const arr = [1, 2, 3, 4]
// arr.push(5) // now array is [1, 2, 3, 4, 5]
// arr.pop() // 5, now the array is [1, 2, 3, 4]
// Above code is a Stack, while below is a Queue

// const arr = [1, 2, 3, 4]
// arr.push(5) // now the array is [1, 2, 3, 4, 5]
// arr.shift() // 1, now the array is [2, 3, 4, 5]
// now suppose you have a stack, which has only follow interface:

// class Stack {
//   push(element) { /* add element to stack */ }
//   peek() { /* get the top element */ }
//   pop() { /* remove the top element */}
//   size() { /* count of elements */}
// }

// Could you implement a Queue by using only above Stack? A Queue must have following interface

// class Queue {
//   enqueue(element) { /* add element to queue, similar to Array.prototype.push */ }
//   peek() { /* get the head element*/ }
//   dequeue() { /* remove the head element, similar to Array.prototype.pop */ }
//   size() { /* count of elements */ }
// }

// note:
// you can only use Stack as provided, Array should be avoided for the purpose of practicing.

/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(element) { 
    // always add it to the bottom of the stack,
    // so that first in element always stays on the top of the stack
    
    // transfer all elements from stack1 to stack2 as you want to add the new element to the bottom of stack1
    for(let i=0; i<this.stack1.size(); i++){
      this.stack2.push(this.stack1.pop());
    }
    
    // now add the element to stack1
    this.stack1.push(element);
    
    // transfer back
    for(let i=0; i<this.stack2.size(); i++){
      this.stack1.push(this.stack2.pop());
    }
  }
  peek() { 
    return this.stack1.peek();
  }
  size() { 
    return this.stack1.size();
  }
  dequeue() {
    return this.stack1.pop();
  }
}