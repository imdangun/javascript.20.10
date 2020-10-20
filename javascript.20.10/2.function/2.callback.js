function sayOdd(num) {
	console.log(`${num} is an odd number.`);
}

function sayEven(num) {
	console.log(`${num} is an even number.`);
}

function lookNum(fn1, fn2) {
	const num = parseInt(Math.random() * 10) + 1;
	if(num % 2 != 0) fn1(num);
	else fn2(num);
}

lookNum(sayOdd, sayEven); // 1 is an odd number.


//
let shef1 = function(food) {
	return `sweet ${food}`;
}

let shef2 = function(food) {
	return `hot ${food}`;
}

let waiter = function(food, shef) {
	return shef(food);
}

console.log(waiter('jajangmyeon', shef1), // sweet jajangmyeon
		    waiter('jajangmyeon', shef2), // hot jajangmyeon
		    waiter('champon', shef2));    // hot champon