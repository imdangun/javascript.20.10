/* 과제1: 
산술 연산 함수를 만든다.

- (피연사자1, 피연산자2, 산술연산자)가 파라미터이다.
- 파라미터 피연산자들은 string type 이다.
- 산술연산자 중에서 + 는 제한다.
- 호출자가 마지막 파라미터 산술연산자를 정하지 않으면, 곱하기를 한다.
- 계산 결과를 return 한다.
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