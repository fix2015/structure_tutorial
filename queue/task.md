### Task 1: Implement a Queue Using Two Stacks
**Problem:**  
Design a queue that supports the following operations using two stacks:
- `enqueue(x)` — Push element `x` to the back of the queue.
- `dequeue()` — Removes the element from the front of the queue.
- `peek()` — Get the front element.
- `empty()` — Return whether the queue is empty.

**Input:**
- Operations:
  1. `enqueue(1)`
  2. `enqueue(2)`
  3. `dequeue()`
  4. `peek()`
  5. `empty()`

**Output:**
- Result: 
  1. `null` (for `enqueue` operations)
  2. `1` (for `dequeue()`)
  3. `2` (for `peek()`)
  4. `false` (for `empty()`)

---

### Task 2: Circular Queue
**Problem:**  
Implement a circular queue with the following operations:
- `enqueue(x)` — Adds an element to the queue.
- `dequeue()` — Removes an element from the queue.
- `front()` — Get the front element.
- `rear()` — Get the last element.
- `isFull()` — Check if the queue is full.
- `isEmpty()` — Check if the queue is empty.

**Input:**
- Operations:
  1. `enqueue(1)`
  2. `enqueue(2)`
  3. `enqueue(3)`
  4. `dequeue()`
  5. `front()`

**Output:**
- Result:
  1. `null` (for `enqueue` operations)
  2. `1` (for `dequeue()`)
  3. `2` (for `front()`)

---

### Task 3: Reverse First K Elements of Queue
**Problem:**  
Given a queue, reverse the first `k` elements of the queue. The remaining elements should be in the same order.

**Input:**
- Queue: `[1, 2, 3, 4, 5]`
- `k = 3`

**Output:**
- Result: `[3, 2, 1, 4, 5]`

---

### Task 4: Moving Average from Data Stream
**Problem:**  
Design a class that computes the moving average of the last `n` elements from a stream of data. Implement the `next(val)` method that computes the moving average of the stream as new elements are added.

**Input:**
- Initialize moving average with `n = 3`.
- Add values: `next(1)`, `next(10)`, `next(3)`, `next(5)`

**Output:**
- Result:
  1. `next(1)` → `1.0`
  2. `next(10)` → `5.5`
  3. `next(3)` → `4.66667`
  4. `next(5)` → `6.0`

---

### Task 5: Generate Binary Numbers from 1 to N
**Problem:**  
Given an integer `n`, generate all binary numbers from 1 to `n` using a queue. The queue should help generate the binary numbers level by level.

**Input:**
- `n = 5`

**Output:**
- Result: `["1", "10", "11", "100", "101"]`

---

### Task 6: Queue Reconstruction by Height
**Problem:**  
Suppose you have a queue of people, and each person is represented by a pair of integers `(h, k)` where `h` is the height of the person, and `k` is the number of people in front of this person who have a height greater than or equal to `h`. Write a function to reconstruct the queue.

**Input:**
- Array of pairs: `[[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]`

**Output:**
- Result: `[[5, 0], [5, 2], [6, 1], [7, 0], [7, 1], [4, 4]]`

---
