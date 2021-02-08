let obj = {};
console.log(obj); // {}

console.log(obj.__proto__ == Object.prototype); // true

console.log(Object.prototype.__proto__); // null


//
let arr = [1, 2];
console.log(arr.__proto__ == Array.prototype); // true
console.log(arr.__proto__.__proto__ == Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null