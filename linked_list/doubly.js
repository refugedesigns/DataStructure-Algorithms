class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  // [23, 45, 23, 5]
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leadNode = this._traverseToIndex(index - 1);
    const holdingPinter = leadNode.next;
    newNode.previous = leadNode;
    leadNode.next = newNode;
    newNode.next = holdingPinter;
    this.length++;
    return this.printList();
  }

  remove(index) {
    const leadNode = this._traverseToIndex(index - 1);
    leadNode.next = leadNode.next.next;
  }

  _traverseToIndex(index) {
    let currNode = this.head;
    let counter = 0
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

const myList = new LinkedList(23);
myList.append(4);
myList.append(29);
myList.prepend(45);
myList.prepend(65);
myList.insert(2, 44);
myList.remove(4);
console.log(myList.printList());
