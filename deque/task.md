### Task 1: Sliding Window Maximum
**Problem:**  
Given an array of integers and a sliding window size `k`, find the maximum value in each sliding window of size `k`.

**Input:**
- Array: `[1, 3, -1, -3, 5, 3, 6, 7]`
- Window size: `3`

**Output:**
- Result: `[3, 3, 5, 5, 6, 7]`

---

### Task 2: Design a Circular Deque
**Problem:**  
Design a circular deque that supports the following operations:
- `insertFront`: Adds an item at the front of the deque.
- `insertLast`: Adds an item at the rear of the deque.
- `deleteFront`: Deletes an item from the front of the deque.
- `deleteLast`: Deletes an item from the rear of the deque.
- `getFront`: Gets the front item from the deque.
- `getRear`: Gets the last item from the deque.
- `isEmpty`: Checks if the deque is empty.
- `isFull`: Checks if the deque is full.

**Input:**
- Operations: 
  ```
  insertFront(1)
  insertLast(2)
  getFront()
  getRear()
  deleteFront()
  deleteLast()
  isEmpty()
  ```

**Output:**
- Result: `[1, 2, 1, 2, false]`

---

### Task 3: Implement Stack Using Deque
**Problem:**  
Implement a stack using a deque (double-ended queue). The stack should support the following operations:
- `push(x)`: Pushes an element onto the stack.
- `pop()`: Removes the top element from the stack.
- `top()`: Returns the top element of the stack.
- `empty()`: Returns whether the stack is empty.

**Input:**
- Operations:
  ```
  push(1)
  push(2)
  top()
  pop()
  empty()
  ```

**Output:**
- Result: `[2, 2, false]`

---

### Task 4: Palindrome Checker Using Deque
**Problem:**  
Given a string, check if it is a palindrome using a deque. A palindrome is a word, phrase, or sequence that reads the same backward as forward.

**Input:**
- String: `"racecar"`

**Output:**
- Result: `true`

---

### Task 5: First Unique Character in a Stream
**Problem:**  
Design a data structure that supports the following operations on a stream of characters:
- `insert(c)`: Inserts a character `c` into the stream.
- `firstUniq()`: Returns the first unique character in the stream.

**Input:**
- Stream: `"aabcc"`

**Output:**
- Result: `["a", "b", "c", "c", ""]`

---

### Task 6: Maximal Rectangle
**Problem:**  
Given a 2D matrix filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return its area. Use a deque to optimize the solution.

**Input:**
- Matrix: 
  ```
  [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]
  ```

**Output:**
- Result: `6`

---

### Task 7: Remove Duplicate Letters
**Problem:**  
Given a string, remove duplicate letters so that every letter appears once and only once. The result should be the smallest lexicographical order of the possible answers.

**Input:**
- String: `"bcabc"`

**Output:**
- Result: `"abc"`

---

### Task 8: Sort a Deque
**Problem:**  
Sort a deque of integers in ascending order.

**Input:**
- Deque: `[3, 1, 4, 1, 5, 9, 2, 6]`

**Output:**
- Result: `[1, 1, 2, 3, 4, 5, 6, 9]`

---

### Task 9: Reverse Subarray Using Deque
**Problem:**  
Given an array, reverse a subarray of size `k` in the array using a deque.

**Input:**
- Array: `[1, 2, 3, 4, 5, 6]`
- `k`: `3`

**Output:**
- Result: `[3, 2, 1, 4, 5, 6]`

---

### Task 10: Remove All Adjacent Duplicates Using Deque
**Problem:**  
Given a string, remove all adjacent duplicates using a deque. The operation is repeated until no more adjacent duplicates exist.

**Input:**
- String: `"abbaca"`

**Output:**
- Result: `"ca"`

---
