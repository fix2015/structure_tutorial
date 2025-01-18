class Heap {
    constructor(type = "max") {
        this.type = type; 
        this.heap = [];
    }

    // Insert an element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Helper function to maintain the heap property after insertion
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex])) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Extract the root element (max or min)
    extract() {
        if (this.size() === 0) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return root;
    }

    // Helper function to maintain the heap property after extraction
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const leftChildIndex = (index * 2) + 1;
        const rightChildIndex = (index * 2) + 2;
        let swap = null;

        if (leftChildIndex < length) {
            if (this.compare(this.heap[leftChildIndex], this.heap[index])) {
                swap = leftChildIndex;
            }
        }
        if (rightChildIndex < length) {
            if (this.compare(this.heap[rightChildIndex], this.heap[swap || index])) {
                swap = rightChildIndex;
            }
        }
        if (swap === null) return;
        [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
        this.heapifyDown();
    }

    // Compare two values based on the heap type
    compare(child, parent) {
        if (this.type === "max") {
            return child > parent;
        }
        return child < parent;
    }

    // Peek at the root element without removing it
    peek() {
        return this.heap[0];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}

const maxHeap = new Heap("max");

// Insert elements into the heap
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);

// Peek at the root element
console.log(maxHeap.peek()); // Output: 20

// Extract the root element (max)
console.log(maxHeap.extract()); // Output: 20
console.log(maxHeap.peek()); // Output: 10

// Get the size of the heap
console.log(maxHeap.size()); // Output: 2

// Initialize a Min Heap
const minHeap = new Heap("min");

// Insert elements into the min heap
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);

// Peek at the root element
console.log(minHeap.peek()); // Output: 5

// Extract the root element (min)
console.log(minHeap.extract()); // Output: 5
console.log(minHeap.peek()); // Output: 10
