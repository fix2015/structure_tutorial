# Trie (Prefix Tree) Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **linked lists**, or **stacks**, address those foundational concepts briefly before moving forward.
- Explain the **Trie (Prefix Tree)** data structure to everyone:
  - A **Trie (Prefix Tree)** is a tree-like data structure used to store strings, where each node represents a character in the string.
  - It is mainly used for **prefix matching** and is efficient for tasks like autocomplete and dictionary lookups.
  - The key operations are:
    - **insert(word)**: Adds a word to the trie.
    - **search(word)**: Checks if a word exists in the trie.
    - **startsWith(prefix)**: Checks if there is any word in the trie that starts with the given prefix.

## 5-10 minutes: Introduction to Trie and its Key Operations
- Explain the **Trie (Prefix Tree)** data structure and its real-world analogy (like a phonebook or dictionary).
- Discuss key operations:
  - **insert(word)**: Adds a word to the trie.
  - **search(word)**: Checks if a word exists in the trie.
  - **startsWith(prefix)**: Checks if there is any word in the trie that starts with the given prefix.

## 10-20 minutes: Implement a Trie Class from Scratch
- Guide students to implement a Trie class in JavaScript.
- The class should support the following methods:
  - `insert(word)`
  - `search(word)`
  - `startsWith(prefix)`

Example:

```javascript
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Adds a word to the trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Checks if a word exists in the trie
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  // Checks if there is any word that starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
```

## 20-30 minutes: Task - Implement a Trie-based Solution for a Problem
- Assign a task where students need to solve a problem using the Trie.
- Example problem: Implement a search function that checks if any word in the trie starts with a given prefix.

## 30-40 minutes: Home Task - Solve a Problem Using Trie from LeetCode
- Provide a LeetCode problem that can be solved using the Trie data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience