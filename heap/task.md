### Task 1: Kth Largest Element in an Array
**Problem:**  
Given an integer array and an integer `k`, find the `k`th largest element in the array. Use a heap to efficiently find the `k`th largest element.

**Input:**
- Array: `[3, 2, 1, 5, 6, 4]`
- `k = 2`

**Output:**
- Result: `5`

---

### Task 2: Merge K Sorted Lists
**Problem:**  
Given `k` sorted linked lists, merge them into one sorted list. Use a heap to merge the lists efficiently.

**Input:**
- Lists: 
  1. `[1, 4, 5]`
  2. `[1, 3, 4]`
  3. `[2, 6]`

**Output:**
- Merged List: `[1, 1, 2, 3, 4, 4, 5, 6]`

---

### Task 3: Find Median from Data Stream
**Problem:**  
Design a class that supports the following operations:
- `addNum(num)` — Adds a number from the data stream.
- `findMedian()` — Returns the median of all elements added so far.

Use a heap to efficiently compute the median.

**Input:**
- Operations:
  1. `addNum(1)`
  2. `addNum(2)`
  3. `findMedian()`
  4. `addNum(3)`
  5. `findMedian()`

**Output:**
- Result:
  1. `null` (for `addNum`)
  2. `1.5` (for `findMedian()`)
  3. `2` (for `findMedian()`)

---

### Task 4: Top K Frequent Elements
**Problem:**  
Given a non-empty array of integers, return the `k` most frequent elements. Use a heap to efficiently find the top `k` frequent elements.

**Input:**
- Array: `[1, 1, 1, 2, 2, 3]`
- `k = 2`

**Output:**
- Result: `[1, 2]`

---

### Task 5: Sliding Window Maximum
**Problem:**  
Given an array of integers `nums` and a sliding window of size `k`, find the maximum element in each sliding window as it moves from left to right. Use a heap to compute the maximum for each window efficiently.

**Input:**
- Array: `[1, 3, -1, -3, 5, 3, 6, 7]`
- `k = 3`

**Output:**
- Result: `[3, 3, 5, 5, 6, 7]`

---

### Task 6: Connect Ropes with Minimum Cost
**Problem:**  
Given `n` ropes with different lengths, connect the ropes into one rope. The cost of connecting two ropes is the sum of their lengths. Use a heap to minimize the total cost.

**Input:**
- Ropes: `[4, 3, 2, 6]`

**Output:**
- Result: `29`

---

### Task 7: Find the Kth Smallest Element in a Sorted Matrix
**Problem:**  
Given an `n x n` matrix where each of the rows and columns is sorted in ascending order, find the `k`th smallest element in the matrix. Use a heap to find the `k`th smallest element efficiently.

**Input:**
- Matrix: 
```
[ [1, 5, 9], [10, 11, 13], [12, 13, 15] ]
```

- `k = 8`

**Output:**
- Result: `13`

---

### Task 8: Huffman Encoding
**Problem:**  
Given a string of characters, construct a Huffman tree for data compression. The tree should be constructed using a heap to minimize the total cost of encoding.

**Input:**
- String: `"aaabbc"`

**Output:**
- Huffman Codes: 
- `a: 0`
- `b: 10`
- `c: 11`

---

### Task 9: Top K Elements in a Stream
**Problem:**  
Given a stream of integers, find the top `k` largest elements from the stream at any point in time. Use a heap to maintain the top `k` elements.

**Input:**
- Stream: `[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]`
- `k = 3`

**Output:**
- Result: `[5, 5, 6]`

---

### Task 10: Rearrange Characters in a String
**Problem:**  
Given a string `s`, rearrange its characters such that no two adjacent characters are the same. Use a heap to rearrange the characters with the highest frequencies.

**Input:**
- String: `"aab"`

**Output:**
- Rearranged String: `"aba"`

---
