### Task 1: Kth Largest Element in an Array
**Problem:**  
Given an integer array and an integer `k`, find the `k`th largest element in the array. Implement the solution using a priority queue (min-heap).

**Input:**
- Array: `[3, 2, 1, 5, 6, 4]`
- `k = 2`

**Output:**
- Result: `5`

---

### Task 2: Merge K Sorted Lists
**Problem:**  
Given `k` sorted linked lists, merge them into one sorted list. Use a priority queue to efficiently merge the lists.

**Input:**
- Lists: 
  1. `[1, 4, 5]`
  2. `[1, 3, 4]`
  3. `[2, 6]`

**Output:**
- Merged list: `[1, 1, 2, 3, 4, 4, 5, 6]`

---

### Task 3: Find Median from Data Stream
**Problem:**  
Design a class that supports the following operations:
- `addNum(num)` — Adds a number from the data stream.
- `findMedian()` — Returns the median of all elements added so far. 

The class should maintain the median in an efficient way using a priority queue (min-heap and max-heap).

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
Given a non-empty array of integers, return the `k` most frequent elements. Implement the solution using a priority queue (min-heap).

**Input:**
- Array: `[1, 1, 1, 2, 2, 3]`
- `k = 2`

**Output:**
- Result: `[1, 2]`

---

### Task 5: Reorganize String
**Problem:**  
Given a string `s`, rearrange the characters of the string so that no two adjacent characters are the same. Return the rearranged string or an empty string if it is not possible.

**Input:**
- String: `"aab"`

**Output:**
- Result: `"aba"`

---

### Task 6: Connect Ropes with Minimum Cost
**Problem:**  
Given `n` ropes with different lengths, connect the ropes into one rope. The cost of connecting two ropes is the sum of their lengths. Implement the solution using a priority queue (min-heap) to minimize the total cost.

**Input:**
- Ropes: `[4, 3, 2, 6]`

**Output:**
- Result: `29`

---

### Task 7: Sliding Window Maximum
**Problem:**  
Given an array of integers `nums` and a sliding window of size `k`, find the maximum element in each sliding window as it moves from left to right.

**Input:**
- Array: `[1, 3, -1, -3, 5, 3, 6, 7]`
- `k = 3`

**Output:**
- Result: `[3, 3, 5, 5, 6, 7]`

---
