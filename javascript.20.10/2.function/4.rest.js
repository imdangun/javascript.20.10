function sum(a, b) {
	return a + b;
}

console.log(sum(1, 2, 3)); // 3


/** rest parameter **/
function sumAll(...args) {
	let tot = 0;
	
	for(let arg of args) tot += arg;
	return tot;
}

console.log(sumAll(1), sumAll(1, 2, 3)); // 1 6


//
function printName(firstName, lastName, ...titles) {
	console.log(firstName, lastName);             // adam smith
	console.log(titles[0], titles[1], titles[2]); // operator consul undefined
	console.log(titles.length);                   // 2
}

printName('adam', 'smith', 'operator', 'consul');


//
function showName() {
	console.log(arguments.length);
	console.log(arguments[0], arguments[1]);
}

showName(); // 0  // undefined undefined
showName('erica', 'terry'); // 2  // erica terry


/** spread syntax **/
console.log(Math.max(1, 2, 3)); // 3

let arr = [1, 2, 3];
console.log(Math.max(arr));    // NaN
console.log(Math.max(...arr)); // 3

let arr1 = [1, -2, 3];
let arr2 = [4, 1, -4];
console.log(...arr1, ...arr2); // 1 -2 3 4 1 -4
console.log(Math.max(...arr1, ...arr2)); // 4
console.log(Math.max(...arr1, 1, ...arr2, 9)); // 9

let merged = [...arr1, 1, ...arr2, 9];
console.log(merged);
/*
[
  1, -2,  3, 1,
  4,  1, -4, 9
]
*/


// string -> array
let str = 'hello';
arr = [...str];
console.log(arr);  // [ 'h', 'e', 'l', 'l', 'o' ]

arr2 = Array.from(str);
console.log(arr2); // [ 'h', 'e', 'l', 'l', 'o' ]