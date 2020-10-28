function laugh(cnt) {
	if(cnt < 0 || Math.trunc(cnt) != cnt)
		throw new Error('반복 횟수는 0 이상의 정수여야 합니다.');
	
	let laughter = "";
	for(let i = 0; i < cnt ; i++) laughter += "ha ";
	
	return laughter;
}

let diff;
let start  = Date.now();

try {
	console.log(laugh(3));
	// console.log(laugh(2.1));
} catch(e) {
	console.log(e.message);
} finally {
	diff = Date.now() - start;
}

console.log(`소요 시간: ${diff}ms`);