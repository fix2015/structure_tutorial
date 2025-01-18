# Priority Queue Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **linked lists**, or **queues**, address those foundational concepts briefly before moving forward.
- Explain the **Priority Queue** data structure to everyone:
  - A **Priority Queue** is a special type of queue where each element is associated with a priority.
  - Elements with higher priority are dequeued before elements with lower priority, regardless of their insertion order.
  - The key operations are:
    - **enqueue(element, priority)**: Adds an element to the queue with a given priority.
    - **dequeue()**: Removes and returns the element with the highest priority.
    - **peek()**: Returns the element with the highest priority without removing it.
    - **isEmpty()**: Checks if the queue is empty.

## 5-10 minutes: Introduction to Priority Queue and its Key Operations
- Explain the **Priority Queue** data structure and its real-world analogy (like a hospital emergency room).
- Discuss key operations:
  - **enqueue(element, priority)**: Adds an element to the queue with a given priority.
  - **dequeue()**: Removes and returns the element with the highest priority.
  - **peek()**: Returns the element with the highest priority without removing it.
  - **isEmpty()**: Checks if the queue is empty.

## 10-20 minutes: Implement a Priority Queue Class from Scratch
- Guide students to implement a Priority Queue class in JavaScript.
- The class should support the following methods:
  - `enqueue(element, priority)`
  - `dequeue()`
  - `peek()`
  - `isEmpty()`

Example:

```javascript
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Adds an element with a priority
  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  // Removes and returns the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return 'Priority Queue is empty';
    }
    return this.items.shift();
  }

  // Returns the element with the highest priority without removing it
  peek() {
    if (this.isEmpty()) {
      return 'Priority Queue is empty';
    }
    return this.items[0];
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue('Patient A', 2);
pq.enqueue('Patient B', 1);
pq.enqueue('Patient C', 3);

console.log(pq.dequeue()); // { element: 'Patient B', priority: 1 }
console.log(pq.peek());    // { element: 'Patient A', priority: 2 }
console.log(pq.isEmpty()); // false
```

## 20-30 minutes: Task - Solve a Problem Using a Priority Queue
- Assign a task where students need to solve a problem using the Priority Queue.
- Example problem: Simulate a system that handles customer service requests with different priority levels.

Example:

```javascript
function customerSupportSystem(requests) {
  const pq = new PriorityQueue();

  requests.forEach(request => {
    pq.enqueue(request.name, request.priority);
  });

  while (!pq.isEmpty()) {
    const served = pq.dequeue();
    console.log(`Serving: ${served.element} with priority ${served.priority}`);
  }
}

const requests = [
  { name: 'Request A', priority: 3 },
  { name: 'Request B', priority: 1 },
  { name: 'Request C', priority: 2 }
];

customerSupportSystem(requests);
```

## 30-40 minutes: Home Task - Solve a Problem Using Priority Queue from LeetCode
- Provide a LeetCode problem that can be solved using the Priority Queue data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience