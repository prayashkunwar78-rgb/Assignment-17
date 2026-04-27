// Importing functions from other files
import { add, subtract } from "./mathUtils.js";
import { getUserName, getUserAge } from "./userUtils.js";

console.log(add(10, 5));
console.log(subtract(10, 5));

console.log(getUserName("John"));
console.log(getUserAge(22));

/*
Modules help split code into smaller parts

Types:
- export: named export
- default export: one main export
- import: used to bring functions
*/