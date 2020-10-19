/* 과제1: 
다음 조건을 가진 산술 연산 function 을 만드세요.

- 파라미터(피연산자1, 피연산자2, 산술연산자) 를 받는다.
- 피연산자들은 string type 이다.
- 산술연산자에서 + 를 제한다.
- 호출자가 연산자를 전달하지 않으면 곱하기를 한다.
- 연산종류에 맞는 계산 결과를 return 한다.
*/

function calculate(val1, val2, operator='*') {
	let result = 0;
	
	switch(operator) {	
	case '-': result = val1 - val2; break;
	case '*': result = val1 * val2; break;
	case '/': result = val1 / val2;
	}
	
	return result;
}

console.log(calculate('1', '2', '-')); // -1
console.log(calculate('1', '2'));      // 3