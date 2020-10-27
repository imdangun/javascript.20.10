function f() {
	let val = 1;
	
	return function() {
		console.log(val);
	}
}

//g.[[Environment]] 에 f() 호출 시 만들어진 lexcial environemnt 주소가 저장된다.
let g = f();

// 세 개의 lexical environment 가 생긴다.
let arr = [f(), f(), f()];

//lexical environment 가 grabage collectiong 된다.
g = null;