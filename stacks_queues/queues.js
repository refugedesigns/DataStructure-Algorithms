class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this.printQueue();
    }

    this.bottom.next = newNode;
    this.bottom = newNode;
    this.length++;
    return this.printQueue();
  }

  dequeue() {
    if(!this.top) {
        return null;
    }

    if(this.top === this.bottom) {
        this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--
    return holdingPointer.value;
  }

  printQueue() {
    const array = []
    let currNode = this.top 
    while(currNode) {
        array.push(currNode.value)
        currNode = currNode.next;
    }
    return array
  }
}

const myQueue = new Queue()
myQueue.enqueue(8)
myQueue.enqueue(23)
myQueue.enqueue(3)
myQueue.enqueue(12)
myQueue.dequeue()
console.log(myQueue.printQueue())
