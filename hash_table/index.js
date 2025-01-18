class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
    }

    // Hash function to calculate the index
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) + hash + key.charCodeAt(i); 
        }
        return hash % this.table.length;
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]); 
    }

    // Delete a key-value pair from the hash table
    delete(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(([k, v]) => k !== key);
        }
    }

    // Search for a value by its key
    search(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let [k, v] of this.table[index]) {
                if (k === key) {
                    return v;
                }
            }
        }
        return null; 
    }

    // Get the size of the hash table
    size() {
        let count = 0;
        for (let bucket of this.table) {
            if (bucket) {
                count += bucket.length;
            }
        }
        return count;
    }
}
