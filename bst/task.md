### Task 1: Validate Binary Search Tree
**Problem:**  
Given a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as:
- The left subtree of a node contains only nodes with keys less than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- Both the left and right subtrees must also be binary search trees.

**Input:**
- Tree: 
  ```
        2
       / \
      1   3
  ```

**Output:**
- Result: `true`

---

### Task 2: Inorder Traversal of Binary Search Tree
**Problem:**  
Given a binary search tree, return the inorder traversal of its nodes' values. The inorder traversal of a BST should return the values in sorted order.

**Input:**
- Tree: 
  ```
        4
       / \
      2   6
     / \  / \
    1  3 5   7
  ```

**Output:**
- Result: `[1, 2, 3, 4, 5, 6, 7]`

---

### Task 3: Find the Kth Smallest Element in a BST
**Problem:**  
Given a binary search tree, find the `k`th smallest element in it.

**Input:**
- Tree: 
  ```
        5
       / \
      3   6
     / \  
    2   4
  ```
- k: `3`

**Output:**
- Result: `3`

---

### Task 4: Convert Sorted Array to Binary Search Tree
**Problem:**  
Given a sorted array, convert it to a balanced binary search tree.

**Input:**
- Array: `[1, 2, 3, 4, 5, 6, 7]`

**Output:**
- Result: 
  ```
        4
       / \
      2   6
     / \  / \
    1  3 5   7
  ```

---

### Task 5: Lowest Common Ancestor in a Binary Search Tree
**Problem:**  
Given a binary search tree and two node values, find their lowest common ancestor (LCA). The LCA of two nodes `p` and `q` in a BST is defined as the lowest node that is an ancestor of both `p` and `q`.

**Input:**
- Tree: 
  ```
        6
       / \
      2   8
     / \ / \
    0  4 7  9
      / \
     3   5
  ```
- Nodes: `p = 2`, `q = 8`

**Output:**
- Result: `6`

---

### Task 6: Delete a Node in a Binary Search Tree
**Problem:**  
Given a binary search tree and a node to be deleted, delete the node and return the new tree. After deleting a node:
- If the node has no children, simply remove it.
- If the node has one child, replace the node with its child.
- If the node has two children, find the node's in-order successor (smallest node in the right subtree), replace the node with its in-order successor, and delete the in-order successor.

**Input:**
- Tree: 
  ```
        5
       / \
      3   6
     / \   
    2   4 
  ```
- Node to delete: `3`

**Output:**
- Result: 
  ```
        5
       / \
      4   6
     /
    2
  ```

---

### Task 7: Balance a Binary Search Tree
**Problem:**  
Given a binary search tree, balance the tree so that the depth of the two subtrees of every node never differs by more than one.

**Input:**
- Tree: 
  ```
        1
         \
          2
           \
            3
             \
              4
  ```

**Output:**
- Result: 
  ```
        2
       / \
      1   3
           \
            4
  ```

---

### Task 8: Count the Number of Nodes in a Binary Search Tree
**Problem:**  
Given a binary search tree, count the number of nodes in the tree.

**Input:**
- Tree: 
  ```
        4
       / \
      2   6
     / \  / \
    1  3 5   7
  ```

**Output:**
- Result: `7`

---

### Task 9: Search in a Binary Search Tree
**Problem:**  
Given a binary search tree and a value `val`, return the node where the value is located, or `null` if the value is not found.

**Input:**
- Tree: 
  ```
        5
       / \
      3   6
     / \  
    2   4
  ```
- Value: `4`

**Output:**
- Result: `4`

---

### Task 10: Serialize and Deserialize a Binary Search Tree
**Problem:**  
Design an algorithm to serialize and deserialize a binary search tree. Serialization is the process of converting a binary search tree into a string representation, and deserialization is the process of converting a string back into the binary search tree.

**Input:**
- Tree: 
  ```
        5
       / \
      3   6
     / \  
    2   4
  ```

**Output:**
- Result: `"5,3,2,#,#,4,#,#,6,#,#"`
---
