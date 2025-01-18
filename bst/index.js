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
        this.size = 0;
    }

    // Insert a value into the BST
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        this.size++;
    }

    // Helper function to insert a node
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for a node by its value
    search(value) {
        return this.searchNode(this.root, value);
    }

    // Helper function to search for a node
    searchNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return node; // Node found
        }
    }

    // Delete a node by its value
    delete(value) {
        this.root = this.deleteNode(this.root, value);
        this.size--;
    }

    // Helper function to delete a node
    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Node found
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            node.value = this.minNode(node.right).value; 
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    }

    // Helper function to find the minimum node
    minNode(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // In-order traversal (left, root, right)
    inOrder() {
        this.inOrderTraverseNode(this.root);
    }

    // Helper function for in-order traversal
    inOrderTraverseNode(node) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left);
            console.log(node.value);
            this.inOrderTraverseNode(node.right);
        }
    }

    // Get the size of the BST
    size() {
        return this.size;
    }
}
