# Binary Search Tree (BST) Data Structure in JavaScript 🚀

## 0-5 minutes: Check the 
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **trees**, **recursion**, or **binary trees**, address those foundational concepts briefly before moving forward.
- Explain the **Binary Search Tree (BST)** data structure to everyone:
  - A **Binary Search Tree** is a hierarchical data structure where each node has at most two children:
    - **Left child**: Contains values less than the parent node.
    - **Right child**: Contains values greater than the parent node.
  - It is primarily used for efficient searching, insertion, and deletion operations.

## 5-10 minutes: Introduction to Binary Search Tree and its Key Properties
- Explain the **Binary Search Tree** structure and its properties:
  - Each node stores a value.
  - The left subtree of a node contains only values smaller than the node.
  - The right subtree of a node contains only values greater than the node.
  - No duplicate values are allowed in a standard BST.
- Discuss key operations:
  - **Insert(value)**: Adds a value to the BST while maintaining the BST property.
  - **Search(value)**: Checks if a value exists in the BST.
  - **Delete(value)**: Removes a value from the BST while maintaining the BST property.
  - **Traversal**:
    - **Inorder**: Retrieves values in sorted order.
    - **Preorder**: Visits nodes in root-left-right order.
    - **Postorder**: Visits nodes in left-right-root order.

## 10-20 minutes: Implement a Binary Search Tree Class from Scratch
- Guide students to implement a BST class in JavaScript.
- The class should support the following methods:
  - `insert(value)`
  - `search(value)`
  - `delete(value)`
  - `inorderTraversal()`
  - `preorderTraversal()`
  - `postorderTraversal()`

Example:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // Inorder traversal (sorted order)
  inorderTraversal(node = this.root, result = []) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
console.log(bst.search(7)); // true
console.log(bst.inorderTraversal()); // [5, 7, 10, 15]
```

## 20-30 minutes: Task - Solve a Problem Using Binary Search Tree
- Assign a task where students need to solve a problem using a BST.
- Example problem: Find the **kth smallest element** in a BST.

Example:

```javascript
function kthSmallest(root, k) {
  const inorder = [];
  
  function inorderTraversal(node) {
    if (!node) return;
    inorderTraversal(node.left);
    inorder.push(node.value);
    inorderTraversal(node.right);
  }

  inorderTraversal(root);
  return inorder[k - 1];
}
```

## 30-40 minutes: Home Task - Solve a Problem Using BST from LeetCode
- Provide a LeetCode problem that can be solved using a BST.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience