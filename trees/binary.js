/*
1. loop through the tree whiles there is a right or a left,
2. Check if current node is greater than new node then go left else go right
*/

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currNode = this.root;
      while (true) {
        if (currNode.value > newNode.value) {
          if (!currNode.left) {
            currNode.left = newNode;
            break;
          }
          currNode = currNode.left;
        } else {
          if (!currNode.right) {
            currNode.right = newNode;
            break;
          }
          currNode = currNode.right;
        }
      }
    }

    return this;
  }

  lookup(value) {
    let currNode = this.root;
    let lookupNode = null;
    while (currNode) {
      if (currNode.value === value) {
        lookupNode = currNode;
        break;
      } else if (currNode.value > value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return lookupNode;
  }

  remove(value) {
    if(!this.root) {
        return false
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode) {
        if(value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left
        }else if(value > currentNode.value) {
            parentNode = currentNode
            currentNode = currentNode.right;
        }else if(currentNode.value === value) {
            // We have a match, get to work!

            //Option 1: No right child:
            if(currentNode.right === null) {
                if(parentNode === null) {
                    this.root = currentNode.left 
                }else {
                    // if parent > current value, make current left child a child of parent
                    if(parentNode.value > currentNode.value) {
                        parentNode.left = currentNode.left;

                        //if parent < current value, make left child a right child of parent
                    }else if(currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.left;
                    }
                }

                //Option 2: Right child which doesn't have a left child
            }else if(currentNode.right.left === null) {
                currentNode.right.left = currentNode.left 
                if(parentNode === null) {
                    this.root = currentNode.right
                }else {
                    //if parent > current, make right child of the left the parent
                    if(parentNode.value > currentNode.value) {
                        parentNode.left = currentNode.right

                        //if parent < current, make right child a right child of the parent
                    }else if(currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.right;
                    }
                }

                // Option 3: Right child that has a left child
            }else {
                //find the Right child's left most child
                let leftmost = currentNode.right.left 
                let leftmostParent = currentNode.right 
                while(leftmost.left !== null) {
                    leftmostParent = leftmost 
                    leftmost = leftmost.left
                }

                // Parent's left subtree is now leftmost's right subtree
                leftmostParent.left = leftmost.right;
                leftmost.left = currentNode.left;
                leftmost.right = currentNode.right;

                if(parentNode === null) {
                    this.root = leftmost;
                }else {
                    if(parentNode.value > currentNode.value) {
                        parentNode.left = leftmost
                    }else if(currentNode.value > parentNode.value) {
                        parentNode.right = leftmost;
                    }
                }
            }

            return true
        }
    }
  }

  breathFirstSearch() {
    const list = []
    const queue = []

    queue.push(this.root)
    while(queue.length > 0) {
      let currentNode = queue.shift()
      list.push(currentNode.value)
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
    }

    return list
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170)
console.log(tree.breathFirstSearch());
