class Stack {
    constructor() {
        this.items = []; // Initialize an empty array
    }

    // Add an item to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top item
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.items.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Peek at the top item without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.items[this.items.length - 1];
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }
}
