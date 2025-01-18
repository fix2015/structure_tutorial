class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Add an element to the queue with a given priority
    enqueue(element, priority) {
        const item = { element, priority };
        if (this.isEmpty()) {
            this.queue.push(item);
        } else {
            let added = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (item.priority > this.queue[i].priority) {
                    this.queue.splice(i, 0, item);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.queue.push(item);
            }
        }
    }

    // Remove and return the element with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.queue.shift();
    }

    // View the element with the highest priority without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.queue[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.queue.length;
    }
}
