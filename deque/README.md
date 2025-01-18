# Deque Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **queues**, or **stacks**, address those foundational concepts briefly before moving forward.
- Explain the **Deque** data structure to everyone:
  - A **Deque** (Double-Ended Queue) is a generalized form of a queue that allows insertion and deletion at both ends.
  - It can function as both a queue (FIFO) and a stack (LIFO).
  - Common operations:
    - **addFront(item)**: Adds an item to the front of the deque.
    - **addRear(item)**: Adds an item to the rear of the deque.
    - **removeFront()**: Removes an item from the front of the deque.
    - **removeRear()**: Removes an item from the rear of the deque.
    - **peekFront()**: Returns the front item without removing it.
    - **peekRear()**: Returns the rear item without removing it.
    - **isEmpty()**: Checks if the deque is empty.

## 5-10 minutes: Introduction to Deque and its Key Operations
- Explain the **Deque** data structure and its real-world analogy (like a double-sided conveyor belt where items can be added or removed from either end).
- Discuss key operations:
  - **addFront(item)**: Adds an item to the front.
  - **addRear(item)**: Adds an item to the rear.
  - **removeFront()**: Removes an item from the front.
  - **removeRear()**: Removes an item from the rear.
  - **peekFront()**: Views the front item without removing it.
  - **peekRear()**: Views the rear item without removing it.
  - **isEmpty()**: Checks if the deque is empty.

## 10-20 minutes: Implement a Deque Class from Scratch
- Guide students to implement a Deque class in JavaScript.
- The class should support the following methods:
  - `addFront(item)`
  - `addRear(item)`
  - `removeFront()`
  - `removeRear()`
  - `peekFront()`
  - `peekRear()`
  - `isEmpty()`

Example:

```javascript
class Deque {
  constructor() {
    this.items = [];
  }

  // Add item to the front
  addFront(item) {
    this.items.unshift(item);
  }

  // Add item to the rear
  addRear(item) {
    this.items.push(item);
  }

  // Remove item from the front
  removeFront() {
    if (this.isEmpty()) {
      return 'Deque is empty';
    }
    return this.items.shift();
  }

  // Remove item from the rear
  removeRear() {
    if (this.isEmpty()) {
      return 'Deque is empty';
    }
    return this.items.pop();
  }

  // View the front item
  peekFront() {
    if (this.isEmpty()) {
      return 'Deque is empty';
    }
    return this.items[0];
  }

  // View the rear item
  peekRear() {
    if (this.isEmpty()) {
      return 'Deque is empty';
    }
    return this.items[this.items.length - 1];
  }

  // Check if the deque is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const deque = new Deque();
deque.addFront(10);
deque.addRear(20);
deque.addFront(5);
console.log(deque.peekFront()); // 5
console.log(deque.peekRear()); // 20
deque.removeFront();
console.log(deque.peekFront()); // 10
deque.removeRear();
console.log(deque.isEmpty()); // false
```

## 20-30 minutes: Task - Solve a Problem Using a Deque
- Assign a task where students need to solve a problem using the Deque.
- Example problem: Implement a sliding window maximum using a Deque.

Example:

```javascript
function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove elements not within the sliding window
    if (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove smaller elements from the rear of the deque
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add the current element index to the deque
    deque.push(i);

    // Add the maximum element of the window to the result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
```

## 30-40 minutes: Home Task - Solve a Problem Using Deque from LeetCode
- Provide a LeetCode problem that can be solved using the Deque data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience