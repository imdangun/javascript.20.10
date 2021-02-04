/** nested function **/
function init() {
	let name = 'amanda';
	
	function displayName() {
		console.log(name);
	}
	
	displayName();
}

init(); // amanda


/** closure 는 외부 변수를 기억하고, 이 외부 변수에 접근할 수 있는 함수이다. **/
// function 실행될 때마다 lexical environment 가 생긴다.
// function[[Environment]] 에 위 lexcial environment 객체에 대한 참조값이 저장된다.
// 교재 core script > 함수 심화학습 > 렉시컬환경
function makeFn() {
	let name = 'parker';
	
	function displayName() {
		console.log(name);
	}	
	
	return displayName;
}

let myFn = makeFn(); // myFn[[Environment]]
myFn(); // parker