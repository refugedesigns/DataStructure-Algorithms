class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value)
    if(!this.top) {
        this.top = newNode;
        this.bottom = newNode;
        this.length++
        return this.printStack()
    }

    const holdingPointer = this.top;
    this.top = newNode;
    newNode.next = holdingPointer
    this.length++
    return this.printStack()
  }

  pop() {
    if(!this.top) {
        return null;
    }

    if(this.top === this.bottom) {
        this.bottom = null;
    }

    const holdingPointer = this.top 
    this.top = this.top.next;
    this.length--
    return holdingPointer.value;
  }

  printStack() {
    const array = []
    let currNode = this.top 
    while(currNode) {
        array.push(currNode.value)
        currNode = currNode.next;
    }
    return array
  }
}

const linkedListStack = new LinkedListStack()
linkedListStack.push(6)
linkedListStack.push(9)
linkedListStack.push(2)
linkedListStack.push(21)
linkedListStack.push(3)
linkedListStack.push(10)
linkedListStack.pop()
console.log(linkedListStack.printStack())