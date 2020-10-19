let add = function(a, b) {
	return a + b;
}

add = (a, b) => a + b;
console.log(add(1, 2)); // 3

const double = n => 2 * n;
console.log(double(2)); // 4

const greet = () => console.log('hello');
greet(); // hello


//
const age = 16;
const welcome = (age < 20) ?
		() => console.log('You are in teens.') : 
		() => console.log('You are not in teens.');
welcome(); // You are in teens.


//
let sum = (a, b) => {
	const result = a + b;
	return result;
}

console.log(sum(1, 2)); // 3


/*
과제4:
2.callback.js 의 짜장면 이야기를 arrow function 으로 refactoring 하세요.
*/