/* 과제2:
과제 1.calculate.js를, callback 으로 refactoring 한다.
*/
function minus(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function calculate(a, b, fn=multiply) {
	return fn(a, b);	
}

console.log(calculate(1, 2, minus),    // -1
			calculate(1, 2, multiply), // 2
			calculate(1, 2, divide),   // 0.5
			calculate(1, 2));          // 2