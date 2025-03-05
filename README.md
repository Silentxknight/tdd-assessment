# 🧮 TDD String Calculator

This project implements a **String Calculator** using **Test-Driven Development (TDD)** in **Node.js** with **Jest** for testing.

---

## 🚀 Features
- ✅ Supports addition of numbers in a string format  
- ✅ Handles **custom delimiters**  
- ✅ Throws errors for **negative numbers**  
- ✅ Ignores numbers **greater than 1000**  
- ✅ Fully tested with **Jest**  

---

## 📦 Installation

1. **Clone the repository**  
   ```sh
   git clone https://github.com/yourusername/tdd-string-calculator.git
   cd tdd-string-calculator
   
2.	Install dependencies   
    ```sh
    npm install

## 🛠 Usage
```js
  const add = require("./calculator");
  console.log(add("1,2,3")); // Output: 6
  console.log(add("//;\n1;2")); // Output: 3
  console.log(add("1001,2")); // Output: 2 (ignores 1001)
```
## ✅ Running Tests
  ```sh
  npm test
```
Sample output:
```sh
PASS  calculator.test.js
✓ returns 0 for an empty string
✓ returns sum of two numbers
✓ supports custom delimiters
✓ throws error for negative numbers
✓ ignores numbers greater than 1000
```
## 📝 Implementation Details

📌 add(numbers: string): number

The add function follows TDD principles:
	•	Step 1: Returns 0 for an empty string.
	•	Step 2: Sums numbers separated by , or \n.
	•	Step 3: Supports custom delimiters ("//;\n1;2" → 3).
	•	Step 4: Throws an error for negative numbers ("-1,2" → Error: Negatives not allowed: -1).
	•	Step 5: Ignores numbers greater than 1000 ("2,1001" → 2).

## 📂 Project Structure
```sh
tdd-string-calculator/
├── calculator.test.js	   # Jest test files
├── calculator.js          # String calculator function
├── index.js          	   # Added some implementation for clarity
├── package.json           # Dependencies & scripts
├── .gitignore             # Ignored files for Git
└── README.md              # Project documentation
```
## 📝 Understanding index.js
The index.js file is the entry point of the project. It imports the add function from calculator.js and runs sample calculations:
```sh
const add = require("./calculator");
console.log(add("1,2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
console.log(add("1001,2")); // Output: 2 (ignores 1001)
```
## Expected Output
```sh
6
3
2
