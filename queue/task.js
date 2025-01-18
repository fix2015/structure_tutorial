class Queue {
    constructor() {
        this.items = [];
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

function processTasks(taskList) {
    const taskQueue = new Queue();

    // Add tasks to the queue
    for (const task of taskList) {
        taskQueue.enqueue(task);
    }

    // Process tasks
    while (!taskQueue.isEmpty()) {
        const currentTask = taskQueue.dequeue();
        console.log(`Processing ${currentTask.name} (Duration: ${currentTask.duration})`);
    }

    console.log("All tasks have been processed!");
}

// Test cases
const tasks = [
    { name: "Task1", duration: 3 },
    { name: "Task2", duration: 2 },
    { name: "Task3", duration: 1 },
];

processTasks(tasks);
