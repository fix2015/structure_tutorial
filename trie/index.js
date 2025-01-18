class TrieNode {
    constructor() {
        this.children = {}; 
        this.isEndOfWord = false; 
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); 
    }

    // Insert a word into the trie
    insert(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }

    // Check if any word in the trie starts with the given prefix
    startsWith(prefix) {
        let currentNode = this.root;
        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return true;
    }

    // Delete a word from the trie
    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }

    // Helper function to delete a word
    deleteHelper(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        const char = word[index];
        if (!node.children[char]) return false;

        const shouldDeleteCurrentNode = this.deleteHelper(node.children[char], word, index + 1);

        if (shouldDeleteCurrentNode) {
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }

        return false;
    }
}

// Initialize the trie
const trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("app");

// Search for words
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("appl")); // Output: false

// Check if any word starts with a given prefix
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("appl")); // Output: true
console.log(trie.startsWith("banana")); // Output: false

// Delete a word from the trie
trie.delete("app");
console.log(trie.search("app")); // Output: false
console.log(trie.search("apple")); // Output: true
