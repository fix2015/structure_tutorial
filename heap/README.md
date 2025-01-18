# Heap Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **binary trees**, or **priority queues**, address those foundational concepts briefly before moving forward.
- Explain the **Heap** data structure to everyone:
  - A **Heap** is a specialized binary tree-based data structure that satisfies the **heap property**:
    - In a **Max-Heap**, the value of each parent node is greater than or equal to the values of its children.
    - In a **Min-Heap**, the value of each parent node is less than or equal to the values of its children.
  - Heaps are commonly used in priority queues and algorithms like **Heap Sort**.

## 5-10 minutes: Introduction to Heap and its Key Operations
- Explain the **Heap** data structure and its real-world analogy (like a pyramid where the largest or smallest value is at the top).
- Discuss key operations:
  - **insert(value)**: Adds a value to the heap while maintaining the heap property.
  - **extractMax()** or **extractMin()**: Removes and returns the root value (the maximum or minimum value, depending on the type of heap).
  - **peek()**: Returns the root value without removing it.
  - **heapify()**: Ensures the heap property is maintained after an operation.

## 10-20 minutes: Implement a Min-Heap Class from Scratch
- Guide students to implement a Min-Heap class in JavaScript.
- The class should support the following methods:
  - `insert(value)`
  - `extractMin()`
  - `peek()`
  - `heapify()`

Example:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Returns the index of the parent
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Returns the index of the left child
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Returns the index of the right child
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swaps two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Inserts a value into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Moves the last element up to maintain the heap property
  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Extracts the minimum value (root) from the heap
  extractMin() {
    if (this.heap.length === 0) {
      return 'Heap is empty';
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  // Moves the root down to maintain the heap property
  heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  // Returns the minimum value (root) without removing it
  peek() {
    if (this.heap.length === 0) {
      return 'Heap is empty';
    }
    return this.heap[0];
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
console.log(minHeap.peek()); // 3
console.log(minHeap.extractMin()); // 3
console.log(minHeap.peek()); // 5
```

## 20-30 minutes: Task - Solve a Problem Using a Heap
- Assign a task where students need to solve a problem using the Heap.
- Example problem: Find the **kth smallest element** in an array using a Min-Heap.

Example:

```javascript
function findKthSmallest(arr, k) {
  const minHeap = new MinHeap();

  arr.forEach(value => minHeap.insert(value));

  for (let i = 1; i < k; i++) {
    minHeap.extractMin();
  }

  return minHeap.peek();
}

console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 3)); // 7
```

## 30-40 minutes: Home Task - Solve a Problem Using Heap from LeetCode
- Provide a LeetCode problem that can be solved using the Heap data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience