let arr = new Array(1, 'hello', true, {age : 3}, function fn(){}, class A{});
console.log(arr); // [ 1, 'hello', true, { age: 3 }, [Function: fn], [class A] ]

arr = [null, undefined, NaN, ''];
console.log(arr); // [ null, undefined, NaN, '' ]


//
arr = [];
arr[0] = 'a';
arr[2] = 'c';

console.log(arr); // [ 'a', <1 empty item>, 'c' ]
console.log(arr[0]); // a
console.log(arr[1]); // undefined

console.log(arr.length); // 3


//
let matrix = [
	[1, 2],
	[3, 4]
];


//
let a = [1, 2];
let b = [2, 3];
let c = a.concat(b);
console.log(c); // [ 1, 2, 2, 3 ]


//
arr = ['hello', 'world', '!'];
let greeting = arr.join();

console.log(greeting); // hello,world,!

console.log(typeof greeting); // string

console.log(arr.join('/')); // hello/world/!
console.log(arr.join(''));  // helloworld!


// stack
arr = [];
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr.pop()); // 3
console.log(arr); // [ 1, 2 ]


// queue
arr = [];
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr.shift()); // 1
console.log(arr); // [ 2, 3 ]


//
arr = [1, 3, 2];
arr.reverse();
console.log(arr); // [ 2, 3, 1 ]


//
a = [0, 1, 2];
b = a.slice(1);
console.log(b); // [ 1, 2 ]
console.log(a); // [ 0, 1, 2 ]


//
arr = [0, 7, 8, 5];
arr.splice(0, 2, 1, 2, 3, 4);
console.log(arr); // [ 1, 2, 3, 4, 8, 5 ]

arr = ['a', 'b', 'c'];
console.log(arr.indexOf('b')); // 1

arr.splice(arr.indexOf('b'));
console.log(arr); // [ 'a' ]

arr = ['a', 'b', 'c'];
arr.splice(arr.indexOf('b'), 1);
console.log(arr); // [ 'a', 'c' ]

arr = ['a', 'b', 'c', 'b'];
arr.splice(arr.indexOf('b'), 1);
console.log(arr); // [ 'a', 'c', 'b' ]


//
arr = [8, 11, 21, 9];
arr.sort();
console.log(arr); // [ 11, 21, 8, 9 ]
console.log([88, 11, 21, 99].sort()); // [ 11, 21, 88, 99 ]

arr.sort((a, b) => a - b);
console.log(arr); // [ 8, 9, 11, 21 ]

arr.sort((a, b) => b - a);
console.log(arr); // [ 21, 11, 9, 8 ]


// iterating
arr = ['a', 'b', 'c'];

for(let i = 0; i < arr.length; i++)
	console.log(arr[i]);
/*
a
b
c
*/

for(let item of arr)
	console.log(item);
/*
a
b
c
*/

for(let idx in arr)
	console.log(arr[idx]);
/*
a
b
c
*/


//
function print(e) {
	console.log(e);
}

function print2(e, i) {
	console.log(`[${i}]: ${e}`);
}

function upper(e, i, arr) {
	arr[i] = e.toUpperCase();
}

arr = ['a', 'b'];

arr.forEach(print);
/*
a
b
*/

arr.forEach(print2);
/*
[0]: a
[1]: b
*/

arr.forEach(upper);
console.log(arr); // [ 'A', 'B' ]


//
let group = {
	title : 'art',
	students : ['winston', 'cal', 'maritha'],
	
	list() {
		this.students.forEach(student => console.log(this.title, student));
	}
};

group.list();
/*
art winston
art cal
art maritha
*/


// array -> string
arr = [1, 2, 3];
str = arr.toString();
console.log(str); // 1,2,3
console.log(typeof str); // string
console.log(String(arr)); // 1,2,3
