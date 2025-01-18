# Linked List Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **queues**, or **stacks**, address those foundational concepts briefly before moving forward.
- Explain the **Linked List** data structure to everyone:
  - A **Linked List** is a linear data structure where each element (called a node) contains:
    - **Data**: The value of the node.
    - **Next**: A pointer/reference to the next node in the sequence.
  - Unlike arrays, linked lists do not require contiguous memory and allow efficient insertion and deletion of elements.

## 5-10 minutes: Introduction to Linked List and its Key Operations
- Explain the **Linked List** data structure and its real-world analogy (like a chain of connected links).
- Discuss key operations:
  - **add(value)**: Adds a node with the given value to the end of the list.
  - **insertAt(index, value)**: Inserts a node with the given value at a specific position.
  - **remove(value)**: Removes the first node with the given value.
  - **search(value)**: Searches for a node with the given value.
  - **isEmpty()**: Checks if the list is empty.

## 10-20 minutes: Implement a Singly Linked List Class from Scratch
- Guide students to implement a Singly Linked List class in JavaScript.
- The class should support the following methods:
  - `add(value)`
  - `insertAt(index, value)`
  - `remove(value)`
  - `search(value)`
  - `isEmpty()`

Example:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Adds a node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Inserts a node at a specific index
  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      return 'Invalid index';
    }
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  // Removes the first occurrence of a value
  remove(value) {
    if (!this.head) {
      return 'List is empty';
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;
      this.size--;
    }
  }

  // Searches for a value in the list
  search(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Checks if the list is empty
  isEmpty() {
    return this.size === 0;
  }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.search(2)); // true
list.remove(2);
console.log(list.search(2)); // false
console.log(list.isEmpty()); // false
```

## 20-30 minutes: Task - Solve a Problem Using a Linked List
- Assign a task where students need to solve a problem using the Linked List.
- Example problem: Reverse a linked list.

Example:

```javascript
function reverseLinkedList(list) {
  let previous = null;
  let current = list.head;

  while (current) {
    const nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  list.head = previous;
}

// Example usage:
reverseLinkedList(list);
```

## 30-40 minutes: Home Task - Solve a Problem Using Linked List from LeetCode
- Provide a LeetCode problem that can be solved using the Linked List data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience