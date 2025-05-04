class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.printQueue();
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer.value;
  }

  printQueue() {
    const array = [];
    let currNode = this.first;
    while (currNode) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    return array;
  }
}

const myQueue = new Queue();
myQueue.enqueue(8);
myQueue.enqueue(23);
myQueue.enqueue(3);
myQueue.enqueue(12);
myQueue.dequeue();
console.log(myQueue.printQueue());
