/*
과제3:
2.callback.js 의 짜장면 이야기를, => function 으로 refactoring 한다.
*/
let chef1 = (food) => `sweet ${food}`;

let chef2 = food => `hot ${food}`;

let waiter = (food, chef) => chef(food);

console.log(waiter('jajangmyeon', chef1), // sweet jajangmyeon
	    	waiter('jajangmyeon', chef2), // hot jajangmyeon
	    	waiter('champon', chef2));    // hot champon