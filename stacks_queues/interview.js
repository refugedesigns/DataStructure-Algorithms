// implement queue using stacks.
class Queue {
    constructor() {
        this.first = []
        this.last = []
    }


    enqueue(value) {
        const length = this.first.length

        for(let i = 0; i < length; i++) {
            this.last.push(this.first.pop())
        }

        this.last.push(value)
        return this 
    }

    dequeue() {
        const length = this.last.length 

        for(let i = 0; i < length; i++) {
            this.first.push(this.last.pop())
        }

        this.first.pop()
        return this 
    }

    peek() {
        if(this.first.length > 0) {
            return this.first[this.first.length - 1]
        }

        return this.last[0]
    }

    printQueue() {
        if(this.first.length > 0) {
            return this.first.reverse()
        }
        return this.last;
    }
}

const myQueue = new Queue()
myQueue.enqueue(6)
myQueue.enqueue(9)
myQueue.enqueue(12)
myQueue.enqueue(190)
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.printQueue())
