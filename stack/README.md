# Stack Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **linked lists**, or **queues**, address those foundational concepts briefly before moving forward.
- Explain the **Stack** data structure to everyone:
  - A **Stack** is a **Last-In, First-Out (LIFO)** structure.
  - It works similarly to a stack of plates: the last plate added is the first one to be removed.
  - The key operations are:
    - **push(item)**: Adds an item to the top of the stack.
    - **pop()**: Removes the item from the top of the stack.
    - **peek()**: Views the item at the top without removing it.
    - **isEmpty()**: Checks if the stack is empty.

## 5-10 minutes: Introduction to Stack and its Key Operations
- Explain the **Stack** data structure and its real-world analogy (like a stack of plates).
- Discuss key operations:
  - **push(item)**: Adds an item to the top of the stack.
  - **pop()**: Removes an item from the top of the stack.
  - **peek()**: Returns the item at the top of the stack without removing it.
  - **isEmpty()**: Checks if the stack is empty.

## 10-20 minutes: Implement a Stack Class from Scratch
- Guide students to implement a Stack class in JavaScript.
- The class should support the following methods:
  - `push(item)`
  - `pop()`
  - `peek()`
  - `isEmpty()`

Example:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Adds an item to the top of the stack
  push(item) {
    this.items.push(item);
  }

  // Removes the item from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.items.pop();  // Removes the last item
  }

  // Returns the item at the top without removing it
  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.items[this.items.length - 1];  // The last item in the stack
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}
```

## 20-30 minutes: Task - Implement a Stack-based Solution for a Problem
- Assign a task where students need to solve a problem using the Stack.
- Example problem: Implement a function to reverse a string using a Stack.

## 30-40 minutes: Home Task - Solve a Problem Using Stack from LeetCode
- Provide a LeetCode problem that can be solved using the Stack data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience