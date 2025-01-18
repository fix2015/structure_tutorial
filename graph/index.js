class Graph {
    constructor() {
        this.vertices = {}; 
    }

    // Add a new vertex to the graph
    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.vertices[vertex1] && this.vertices[vertex2]) {
            this.vertices[vertex1].push(vertex2);
            this.vertices[vertex2].push(vertex1); 
        }
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        if (this.vertices[vertex]) {
            delete this.vertices[vertex];
            for (let key in this.vertices) {
                const index = this.vertices[key].indexOf(vertex);
                if (index !== -1) {
                    this.vertices[key].splice(index, 1);
                }
            }
        }
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.vertices[vertex1] && this.vertices[vertex2]) {
            this.vertices[vertex1] = this.vertices[vertex1].filter(v => v !== vertex2);
            this.vertices[vertex2] = this.vertices[vertex2].filter(v => v !== vertex1);
        }
    }

    // Display the graph structure
    display() {
        console.log(this.vertices);
    }
}
