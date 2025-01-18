class Set {
    constructor() {
        this.items = {}; 
    }

    // Add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
        }
    }

    // Remove an element from the set
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
        }
    }

    // Check if an element exists in the set
    has(element) {
        return this.items.hasOwnProperty(element);
    }

    // Get the size of the set
    size() {
        return Object.keys(this.items).length;
    }

    // Clear all elements from the set
    clear() {
        this.items = {};
    }
}
