# Hash Table Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **objects**, or **maps**, address those foundational concepts briefly before moving forward.
- Explain the **Hash Table** data structure to everyone:
  - A **Hash Table** is a data structure that stores key-value pairs. It uses a **hashing function** to map keys to indices in an array.
  - This allows for fast lookups, insertions, and deletions, typically in **O(1)** time complexity.

## 5-10 minutes: Introduction to Hash Table and its Key Operations
- Explain the **Hash Table** data structure and its real-world analogy (like an index in a book).
- Discuss key operations:
  - **set(key, value)**: Adds or updates a key-value pair in the hash table.
  - **get(key)**: Retrieves the value associated with a given key.
  - **delete(key)**: Removes a key-value pair from the hash table.
  - **has(key)**: Checks if a key exists in the hash table.

## 10-20 minutes: Implement a Hash Table Class from Scratch
- Guide students to implement a simple Hash Table class in JavaScript.
- The class should support the following methods:
  - `set(key, value)`
  - `get(key)`
  - `delete(key)`
  - `has(key)`

Example:

```javascript
class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }

  // Simple hashing function
  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.table.length;
    }
    return total;
  }

  // Adds or updates a key-value pair
  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  // Retrieves the value for a given key
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  // Removes a key-value pair
  delete(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(pair => pair[0] !== key);
    }
  }

  // Checks if a key exists
  has(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return true;
        }
      }
    }
    return false;
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.set('name', 'Alice');
hashTable.set('age', 25);
console.log(hashTable.get('name')); // Alice
console.log(hashTable.has('age')); // true
hashTable.delete('age');
console.log(hashTable.has('age')); // false
```

## 20-30 minutes: Task - Solve a Problem Using a Hash Table
- Assign a task where students need to solve a problem using the Hash Table.
- Example problem: Find the first non-repeating character in a string.

Example:

```javascript
function firstNonRepeatingChar(str) {
  const hashTable = new HashTable();

  // Count the frequency of each character
  for (const char of str) {
    hashTable.set(char, (hashTable.get(char) || 0) + 1);
  }

  // Find the first character with a frequency of 1
  for (const char of str) {
    if (hashTable.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar('swiss')); // 'w'
```

## 30-40 minutes: Home Task - Solve a Problem Using Hash Table from LeetCode
- Provide a LeetCode problem that can be solved using the Hash Table data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience