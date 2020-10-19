                                          // 1000ms = 1s
let timeId = setInterval(() => console.log('tick'), 1000);

setTimeout(() => {
	clearInterval(timeId);
	console.log('stop');
}, 3000);

console.log(new Date());

/*
과제9:
1초 간격으로 현재 시각을 출력하세요.
*/