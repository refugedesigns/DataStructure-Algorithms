class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // [2,5] -> 7 -> [2,5,7]
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    //[4,7] -> 2 -> [2,4,7]
    const newNode = new Node(value);
    const holdingPointer = this.head;
    this.head = newNode;
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

    // [2,9,3] -> 5 at index 1 -> [2,5,9,3]
    const newNode = new Node(value);
    const leadNode = this._traverseToIndex(index - 1);
    const holdingPointer = leadNode.next;
    leadNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if(index <= 0) {
      this.head = this.head.next;
      return this.printList()
    }
    const leadNode = this._traverseToIndex(index-1)
    leadNode.next = leadNode.next.next;
    this.length--
    return this.printList()
  }

  reverse() {
    // [45,5,12,87] -> [87,12,5,45]
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp
    }
    this.head.next = null 
    this.head = first;
    return this.printList()
  }

  _traverseToIndex(index) {
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

myList = new SinglyLinkedList(12);
myList.append(87);
myList.append(90);
myList.prepend(45);
myList.insert(1, 5)
console.log(myList.printList());
console.log(myList.reverse())
