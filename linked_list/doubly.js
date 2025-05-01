class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //[2,8] -> 5 -> [2,8,5]
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    //[2,8] -> 5 -> [5,2,8]
    const newNode = new Node(value);
    const holdingPointer = this.head;
    this.head = newNode;
    holdingPointer.prev = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (index <= 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    //[3,5,1,7] -> 2 at index 2 -> [3,5,2,1,7]
    const newNode = new Node(value);
    const leadNode = this._traversToIndex(index - 1);
    const follower = leadNode.next;
    newNode.prev = leadNode;
    leadNode.next = newNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // [4,5,9,2] -> 1 -> [4,9,2]
    if (index <= 0) {
      const holdingPointer = this.head;
      this.head = holdingPointer.next;
      this.head.prev = null;
      this.length--;
      return this.printList();
    }

    let leadNode = this._traversToIndex(index - 1);
    let holdingPointer = leadNode.next;
    leadNode.next = holdingPointer.next;
    holdingPointer.prev = leadNode;
    this.length--;
    return this.printList();
  }

  _traversToIndex(index) {
    //check if index is a valid number
    if (index <= 0) {
      return this.head;
    }
    let currNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  printList() {
    const array = [];
    let currNode = this.head;
    while (currNode) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    return array;
  }
}

const myList = new LinkedList(4);
myList.append(9);
myList.append(12);
myList.prepend(34);
myList.prepend(56);
myList.insert(3, 28);
myList.remove(2)
console.log(myList.printList());
