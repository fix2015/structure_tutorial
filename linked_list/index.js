class Node {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
        this.size = 0; 
    }

    // Insert a new node at the end of the list
    insert(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Delete the first node containing the given data
    delete(data) {
        if (this.head === null) {
            return "List is empty!";
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }
        if (current.next === null) {
            return "Data not found!";
        }
        current.next = current.next.next;
        this.size--;
    }

    // Search for a node by its data
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Traverse the list and print the data of each node
    traverse() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
