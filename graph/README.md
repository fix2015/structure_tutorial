# Graph Data Structure in JavaScript 🚀

## 0-5 minutes: Check the Home Task
- Review solutions.
- Discuss any issues and common mistakes encountered.
- Clarify doubts related to the home task.

### Key Points to Address:
- If any of the students faced issues with basic concepts like **arrays**, **linked lists**, or **trees**, address those foundational concepts briefly before moving forward.
- Explain the **Graph** data structure to everyone:
  - A **Graph** is a collection of **nodes** (or vertices) connected by **edges**. 
  - It can represent various real-world systems, such as social networks, road maps, or computer networks.
  - Types of graphs:
    - **Directed Graph**: Edges have a direction (e.g., one-way streets).
    - **Undirected Graph**: Edges have no direction (e.g., two-way streets).
    - **Weighted Graph**: Edges have weights (e.g., distances or costs).
    - **Unweighted Graph**: All edges are equal.
  - Graphs can be represented using:
    - **Adjacency Matrix**
    - **Adjacency List**

## 5-10 minutes: Introduction to Graph and its Key Operations
- Explain the **Graph** data structure and its real-world analogy (like a road map where intersections are nodes and roads are edges).
- Discuss key operations:
  - **addVertex(vertex)**: Adds a vertex to the graph.
  - **addEdge(vertex1, vertex2, weight)**: Adds an edge between two vertices (with an optional weight).
  - **removeVertex(vertex)**: Removes a vertex and all its connected edges.
  - **removeEdge(vertex1, vertex2)**: Removes the edge between two vertices.
  - **traverseGraph(startVertex)**: Traverses the graph using algorithms like BFS (Breadth-First Search) or DFS (Depth-First Search).

## 10-20 minutes: Implement a Graph Class from Scratch
- Guide students to implement a Graph class in JavaScript using an adjacency list.
- The class should support the following methods:
  - `addVertex(vertex)`
  - `addEdge(vertex1, vertex2)`
  - `removeVertex(vertex)`
  - `removeEdge(vertex1, vertex2)`
  - `printGraph()`

Example:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adds a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Adds an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  // Removes an edge between two vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  // Removes a vertex and all its edges
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]?.length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Prints the graph
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, '->', this.adjacencyList[vertex].join(', '));
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.printGraph();
/*
Output:
A -> B, C
B -> A, C
C -> A, B
*/
```

## 20-30 minutes: Task - Solve a Problem Using a Graph
- Assign a task where students need to solve a problem using the Graph.
- Example problem: Find the shortest path between two nodes using BFS.

Example:

```javascript
function bfsShortestPath(graph, start, target) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === target) {
      return path;
    }

    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbor of graph[node]) {
        const newPath = [...path, neighbor];
        queue.push(newPath);
      }
    }
  }

  return null; // No path found
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

console.log(bfsShortestPath(graph, 'A', 'F')); // [ 'A', 'C', 'F' ]
```

## 30-40 minutes: Home Task - Solve a Problem Using Graph from LeetCode
- Provide a LeetCode problem that can be solved using the Graph data structure.
- Students can work on this problem during the session or as homework.

---

## Connect with Me:
- [LinkedIn - Vitalii Semianchuk](https://www.linkedin.com/in/vitalii-semianchuk-9812a786/)
- [Telegram - @jsmentorfree](https://t.me/jsmentorfree) - We do a lot of free teaching on this channel! Join us to learn and grow in web development.
- [Tiktok - @jsmentoring](https://www.tiktok.com/@jsmentoring) Everyday new videos
- [Youtube - @jsmentor-uk](https://www.youtube.com/@jsmentor-uk) Mentor live streams
- [Dev.to - fix2015](https://dev.to/fix2015) Javascript featured, live, experience