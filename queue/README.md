# Queue Data Structure in JavaScript 🚀

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **linked lists**, or **stacks**, address those foundational concepts briefly before moving forward.
- Explain the **Queue** data structure to everyone:
  - A **Queue** is a **First-In, First-Out (FIFO)** structure.
  - It works similarly to a line in a bank or supermarket where the first person in line is the first to be served.
  - The key operations are:
    - **enqueue(item)**: Adds an item to the back of the queue.
    - **dequeue()**: Removes the item from the front of the queue.
    - **peek()**: Views the item at the front without removing it.
    - **isEmpty()**: Checks if the queue is empty.

## 5-10 minutes: Introduction to Queue and its Key Operations
- Explain the **Queue** data structure and its real-world analogy (like a queue in a bank).
- Discuss key operations:
  - **enqueue(item)**: Adds an item to the back of the queue.
  - **dequeue()**: Removes an item from the front of the queue.
  - **peek()**: Returns the item at the front of the queue without removing it.
  - **isEmpty()**: Checks if the queue is empty.

## 10-20 minutes: Implement a Queue Class from Scratch
- Guide students to implement a Queue class in JavaScript.
- The class should support the following methods:
  - `enqueue(item)`
  - `dequeue()`
  - `peek()`
  - `isEmpty()`

Example:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Adds an item to the back of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Removes an item from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.items.shift();  // Removes the first item
  }

  // Returns the item at the front without removing it
  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.items[0];  // The first item in the queue
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}
```

## 20-30 minutes: Task - Implement a Queue-based Solution for a Problem
- Assign a task where students need to solve a problem using the Queue.
- Example problem: Implement a system to simulate the handling of requests in a print queue.

## 30-40 minutes: Home Task - Solve a Problem Using Queue from LeetCode
- Provide a LeetCode problem that can be solved using the Queue data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience