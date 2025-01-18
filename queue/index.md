# Queue Data Structure in JavaScript 🚀  
Tiktok tu

A simple implementation of the **Queue** data structure in JavaScript. This repository demonstrates how to create a queue class with essential methods and explains its functionality with practical examples.  

---

## What is a Queue?  
A **Queue** is a data structure that follows the **FIFO** (First In, First Out) principle. The first element added to the queue is the first one to be removed. Think of it as a line at a coffee shop: the first person in line gets served first.  

---

## Features  
- **Enqueue**: Add an item to the queue.  
- **Dequeue**: Remove and return the first item.  
- **Peek**: View the first item without removing it.  
- **isEmpty**: Check if the queue is empty.  
- **Size**: Get the number of items in the queue.  

---

## TikTok Tutorial 🎥  
Want to see a quick tutorial on how to build this? Check out this TikTok video:  
[https://www.tiktok.com/@jsmentoring/video/7461216459239247136](https://www.tiktok.com/@jsmentoring/video/7461216459239247136)  

---

## Code Implementation  

Here’s the JavaScript implementation of the queue:  

```javascript
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
```

---

## Example Usage  

```javascript
// Initialize the queue
const queue = new Queue();

// Add items to the queue
queue.enqueue("Task 1");
queue.enqueue("Task 2");
queue.enqueue("Task 3");

// Peek at the front item
console.log(queue.peek()); // Output: Task 1

// Remove items from the queue
console.log(queue.dequeue()); // Output: Task 1
console.log(queue.dequeue()); // Output: Task 2

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: false

// Get the size of the queue
console.log(queue.size()); // Output: 1
```

---

## Real-World Applications  
1. **Task Scheduling**: Managing tasks in order of arrival.  
2. **Print Queue**: Handling print jobs in a printer.  
3. **Breadth-First Search (BFS)**: Traversing graphs or trees.  
4. **Customer Service Systems**: Serving customers in the order they arrive.  

---

## How to Run the Code  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/queue-data-structure.git
   cd queue-data-structure
   ```
2. Open the file `queue.js` in your favorite code editor.  
3. Run the file using Node.js:  
   ```bash
   node queue.js
   ```

---

## Contributing  
Contributions are welcome! If you have suggestions or want to add new features, feel free to create a pull request.  

---

## License  
This project is licensed under the MIT License.  

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience
