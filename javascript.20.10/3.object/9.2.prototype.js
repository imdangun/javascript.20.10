/** 함수의 prototype property **/
// F.prototype 이 객체면, new 연산자는 F.prototype 을 사용해
// 새 객체의 [[Prototype]] 을 설정한다.

let animal = {
	isAlive : true
}

function Rabbit(rabbitName) {
	this.rabbitName = rabbitName;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('white');

console.log(rabbit.isAlive); // true
console.log(rabbit.rabbitName); // white


// 함수의 prototype 은 constructor property 하나 있는 객체를 가리킨다.
// constructor property value 는 함수 자신이다.
// F.prototype = { constructor : F }
function Duck(duckName) {
	this.duckName = duckName;
}

console.log(Duck.prototype); // {}
console.log(Duck.prototype.constructor); // [Function: Duck]
console.log(Duck.prototype.constructor == Duck); // true

let duck = new Duck('duck');
console.log(duck.prototype); // undefined
console.log(duck.__proto__); // {}
console.log(duck.__proto__.constructor); // [Function: Duck]
console.log(duck.constructor == Duck); // true

let duck2 = new duck.constructor('duck2');
console.log(duck2.constructor); // [Function: Duck]
console.log();


/** Object.prototype **/
let obj = {};
console.log(obj); // {}

obj = new Object();
console.log(obj); // {}

console.log(obj.__proto__ == Object.prototype); // true

console.log(Object.prototype.__proto__); // null

//
let arr = [1, 2];
console.log(arr.__proto__ == Array.prototype); // true
console.log(arr.__proto__.__proto__ == Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null

console.log(arr); // [1, 2]