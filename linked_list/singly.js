class Node {
  constructor(value) {
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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    const holdingPointer = leadNode.next;
    leadNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    const nodeToDelete = this._traverseToIndex(index-1);
    nodeToDelete.next = nodeToDelete.next.next;
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

  _traverseToIndex(index) {
    // we might want to check for a number input
    let currNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }
}

const myLinkedList = new LinkedList(30);
myLinkedList.append(12);
myLinkedList.append(16);
myLinkedList.prepend(24);
myLinkedList.prepend(38);
myLinkedList.insert(2, 45);
myLinkedList.remove(2)
console.log(myLinkedList.printList());
