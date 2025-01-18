class Queue {
    constructor() {
        this.items = []; // Initialize an empty array
    }

    // Add an item to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front item
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.items.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Peek at the front item without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.items[0];
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }
}

const queue = new Queue();
queue.enqueue("Task 1");
queue.enqueue("Task 2");
console.log(queue.peek()); // Task 1
console.log(queue.dequeue()); // Task 1
console.log(queue.isEmpty()); // false
