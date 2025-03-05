const add = require("./calculator");
console.log(add("1,2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
console.log(add("1001,2")); // Output: 2 (ignores 1001)