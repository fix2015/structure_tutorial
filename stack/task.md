### Task 1: Balanced Parentheses
**Problem:**  
Given a string containing just the characters `'('`, `')'`, `{`, `'}'`, `[` and `]`, determine if the input string is valid. An input string is valid if:
- Open brackets must be closed by the corresponding closing bracket.
- Open brackets must be closed in the correct order.

**Input:**
- String: `"{[()()]}"`

**Output:**
- Result: `true`

---

### Task 2: Reverse a String
**Problem:**  
Write a function that reverses a string using a stack data structure.

**Input:**
- String: `"hello"`

**Output:**
- Reversed string: `"olleh"`

---

### Task 3: Evaluate Reverse Polish Notation (RPN)
**Problem:**  
Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN). Valid operators are `+`, `-`, `*`, and `/`. Each operand may be an integer or another expression.

**Input:**
- RPN expression: `["2", "1", "+", "3", "*"]`

**Output:**
- Result: `9`

---

### Task 4: Min Stack
**Problem:**  
Design a stack that supports the following operations:
- `push(x)` — Push the element `x` onto the stack.
- `pop()` — Removes the element on the top of the stack.
- `top()` — Get the top element.
- `getMin()` — Retrieve the minimum element in the stack.

**Input:**
- Operations:
  1. `push(5)`
  2. `push(3)`
  3. `getMin()`
  4. `pop()`
  5. `getMin()`

**Output:**
- Result: 
  1. `null` (for `push` operations)
  2. `3` (for `getMin()`)
  3. `null` (for `pop()`)
  4. `5` (for `getMin()`)

---

### Task 5: Next Greater Element
**Problem:**  
Given an array of integers, find the next greater element for each element in the array. The next greater element for an element `x` is the first greater element that is to the right of `x` in the array. If no such element exists, output `-1`.

**Input:**
- Array: `[4, 5, 2, 10, 8]`

**Output:**
- Result: `[5, 10, 10, -1, -1]`

---
