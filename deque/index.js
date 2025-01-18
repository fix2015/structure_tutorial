class Deque {
    constructor() {
        this.items = [];
    }

    // Add an element to the front of the deque
    insertFront(element) {
        this.items.unshift(element);
    }

    // Add an element to the back of the deque
    insertBack(element) {
        this.items.push(element);
    }

    // Remove and return the element from the front of the deque
    removeFront() {
        if (this.isEmpty()) {
            return "Deque is empty!";
        }
        return this.items.shift();
    }

    // Remove and return the element from the back of the deque
    removeBack() {
        if (this.isEmpty()) {
            return "Deque is empty!";
        }
        return this.items.pop();
    }

    // Peek at the element at the front without removing it
    peekFront() {
        if (this.isEmpty()) {
            return "Deque is empty!";
        }
        return this.items[0];
    }

    // Peek at the element at the back without removing it
    peekBack() {
        if (this.isEmpty()) {
            return "Deque is empty!";
        }
        return this.items[this.items.length - 1];
    }

    // Get the size of the deque
    size() {
        return this.items.length;
    }

    // Check if the deque is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Initialize the deque
const deque = new Deque();

// Insert elements at the front and back
deque.insertFront(10);
deque.insertBack(20);
deque.insertFront(5);

// Peek at the front and back elements
console.log(deque.peekFront()); // Output: 5
console.log(deque.peekBack());  // Output: 20

// Remove elements from the front and back
console.log(deque.removeFront()); // Output: 5
console.log(deque.removeBack());  // Output: 20

// Get the size of the deque
console.log(deque.size()); // Output: 1

// Check if the deque is empty
console.log(deque.isEmpty()); // Output: false
