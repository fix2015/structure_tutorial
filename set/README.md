# Set Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task from Day 1
- Review solutions from Day 1.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **linked lists**, or **stacks**, address those foundational concepts briefly before moving forward.
- Explain the **Set** data structure to everyone:
  - A **Set** is a collection of unique values where duplicate elements are not allowed.
  - It is useful for operations like finding unique items, union, intersection, and difference between collections.
  - The key operations are:
    - **add(value)**: Adds a value to the set.
    - **delete(value)**: Removes a value from the set.
    - **has(value)**: Checks if a value exists in the set.
    - **clear()**: Removes all elements from the set.
    - **size**: Returns the number of elements in the set.

## 5-10 minutes: Introduction to Set and its Key Operations
- Explain the **Set** data structure and its real-world analogy (like a collection of unique stamps or coins).
- Discuss key operations:
  - **add(value)**: Adds a value to the set.
  - **delete(value)**: Removes a value from the set.
  - **has(value)**: Checks if a value exists in the set.
  - **clear()**: Removes all elements from the set.
  - **size**: Returns the number of elements in the set.

## 10-20 minutes: Implement a Set-Like Class from Scratch
- Guide students to implement a Set-like class in JavaScript.
- The class should support the following methods:
  - `add(value)`
  - `delete(value)`
  - `has(value)`
  - `clear()`
  - `size`

Example:

```javascript
class MySet {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = true;
    }
  }

  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
    }
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  clear() {
    this.items = {};
  }

  get size() {
    return Object.keys(this.items).length;
  }
}

// Example usage:
const set = new MySet();
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added
console.log(set.has(1)); // true
console.log(set.size); // 2
set.delete(1);
console.log(set.has(1)); // false
```

## 20-30 minutes: Task - Solve a Problem Using a Set
- Assign a task where students need to solve a problem using the Set.
- Example problem: Write a function that removes duplicate values from an array using a Set.

Example:

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
```

## 30-40 minutes: Home Task - Solve a Problem Using Set from LeetCode
- Provide a LeetCode problem that can be solved using the Set data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience