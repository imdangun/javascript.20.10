/** function declaration **/
function greet() { // code block
	console.log('hello');
}

greet(); // hello


/** function expression **/
let salute = function() {
	console.log('hi');
};

salute(); // hi


/** function with parameter **/
let sayHello = function(user, greeting) {
	return `${greeting}, ${user}.`;
};

console.log(sayHello('rebecca', 'hello')); // hello, rebecca.


/** function as value **/
// copy function to variable.
const sayHi = function() {
	console.log('Hi');
};

const say = sayHi;
say(); // Hi


// return fuction as value.
let shout = function() {
	return function() {
		console.log('Yoo-hoo');
	};
};

let speak = shout();
speak(); // Yoo-hoo


/** annoymous function **/
(function() {
	console.log('earth');
})(); // earth


// function as parameter
let myFn = function(fn) {
	const result = fn();
	console.log(result);
};

myFn(function() {
	return 'moon';
}); // moon

let argFn = function() {
	return 'star';
};

myFn(argFn); // star


/** Function() **/
let add = new Function('a', 'b', 'return a + b');
console.log(add(1, 2)); // 3
console.log(typeof add); // function


/** default parameter **/
let showMsg = function(from, msg='no message.') {
	console.log(`${from}: ${msg}`);
}

showMsg('trinity', 'follow a rabbit.'); // trinity: follow a rabbit.
showMsg('trinity'); // trinity: no message.


/** NFE: Named Function Expression **/
let tellHi = function fn(who) {
	if(who) console.log(`Hi, ${who}.`);
	else fn('Guest');
};

tellHi();       // Hi, Guest.
tellHi('abel'); // Hi, abel.
// fn(); // ReferenceError: fn is not defined