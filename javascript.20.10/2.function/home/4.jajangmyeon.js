/*
과제3:
2.callback.js 의 짜장면 이야기를, => function 으로 refactoring 한다.
*/
let shef1 = (food) => `sweet ${food}`;

let shef2 = food => `hot ${food}`;

let waiter = (food, shef) => shef(food);

console.log(waiter('jajangmyeon', shef1), // sweet jajangmyeon
	    	waiter('jajangmyeon', shef2), // hot jajangmyeon
	    	waiter('champon', shef2));    // hot champon