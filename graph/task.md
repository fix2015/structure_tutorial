### Task 1: Number of Islands
**Problem:**  
Given a 2D grid of `1`'s (land) and `0`'s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

**Input:**
- Grid: 
  ```
  [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ]
  ```

**Output:**
- Result: `3`

---

### Task 2: Clone Graph
**Problem:**  
Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value and a list of its neighbors.

**Input:**
- Graph: 
  ```
  Node 1 -> [Node 2, Node 4]
  Node 2 -> [Node 1, Node 3]
  Node 3 -> [Node 2]
  Node 4 -> [Node 1]
  ```

**Output:**
- Result: A deep copy of the graph with the same structure.

---

### Task 3: Course Schedule
**Problem:**  
There are `n` courses you have to take, labeled from `0` to `n-1`. Some courses have prerequisites. Given an array of prerequisites, determine if it is possible for you to finish all courses.

**Input:**
- Courses: `2`
- Prerequisites: `[[1, 0]]`

**Output:**
- Result: `true`

---

### Task 4: Word Ladder
**Problem:**  
Given two words (`beginWord` and `endWord`), and a dictionary, find the length of the shortest transformation sequence from `beginWord` to `endWord`, such that only one letter can be changed at a time, and each transformed word must exist in the dictionary.

**Input:**
- Begin Word: `"hit"`
- End Word: `"cog"`
- Word List: `["hot", "dot", "dog", "lot", "log", "cog"]`

**Output:**
- Result: `5`

---

### Task 5: Number of Connected Components in an Undirected Graph
**Problem:**  
Given an undirected graph, count the number of connected components in the graph.

**Input:**
- Graph: 
  ```
  n = 5, edges = [[0, 1], [1, 2], [3, 4]]
  ```

**Output:**
- Result: `2`

---

### Task 6: Path Sum II
**Problem:**  
Given a binary tree and a sum, find all root-to-leaf paths where each path’s sum equals the given sum.

**Input:**
- Tree: 
  ```
        5
       / \
      4   8
     /   / \
    11  13  4
   /  \      \
  7    2      1
  ```
- Sum: `22`

**Output:**
- Result: `[[5, 4, 11, 2], [5, 8, 4, 1]]`

---

### Task 7: Detect Cycle in a Directed Graph
**Problem:**  
Given a directed graph, detect if there is a cycle in the graph.

**Input:**
- Graph: `[[1, 2], [2, 3], [3, 1]]`

**Output:**
- Result: `true`

---

### Task 8: Graph Valid Tree
**Problem:**  
Given a graph, determine if it is a valid tree. A valid tree means that the graph is connected and has no cycles.

**Input:**
- Graph: 
  ```
  n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
  ```

**Output:**
- Result: `true`

---

### Task 9: Dijkstra's Shortest Path Algorithm
**Problem:**  
Implement Dijkstra's algorithm to find the shortest path in a graph with weighted edges.

**Input:**
- Graph: 
  ```
  nodes = 5
  edges = [[0, 1, 2], [0, 2, 4], [1, 2, 1], [1, 3, 7], [2, 3, 3], [3, 4, 1]]
  ```
- Start Node: `0`

**Output:**
- Result: `[0, 2, 3, 6, 7]` (Shortest path from node 0 to all other nodes)

---

### Task 10: Topological Sort
**Problem:**  
Given a directed acyclic graph (DAG), perform a topological sort.

**Input:**
- Graph: 
  ```
  n = 4, edges = [[0, 1], [0, 2], [1, 3], [2, 3]]
  ```

**Output:**
- Result: `[0, 1, 2, 3]`

---
