class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function isBalanced(expression) {
    const stack = new Stack();
    const openingBrackets = "({[";
    const closingBrackets = ")}]";
    const matchingBrackets = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (const char of expression) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.isEmpty() || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

// Test cases
console.log(isBalanced("(a + b) * (c - d)")); // Output: true
console.log(isBalanced("{[()]}"));           // Output: true
console.log(isBalanced("{[(])}"));           // Output: false
console.log(isBalanced("((a + b)"));         // Output: false
