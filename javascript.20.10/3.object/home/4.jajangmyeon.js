/* 과제4:
/ch02/home/3.jajangmyeon.js 의 짜장면 이야기를
 객체지향으로 refactoring 하세요.
*/

let shef1 = {
	cook(foodName) {
		return {
			foodName,
			taste: 'sweet'			
		};
	}
};

let shef2 = {
	cook(foodName) {
		return {
			foodName,
			taste: 'hot'
		};
	}
};

let waiter = {
	order(foodName, shef) {
		return shef.cook(foodName);
	}
};

console.log(waiter.order('jajangmyeon', shef1)); // { foodName: 'jajangmyeon', taste: 'sweet' }
console.log(waiter.order('jajangmyeon', shef2)); // { foodName: 'jajangmyeon', taste: 'hot' }
console.log(waiter.order('champon', shef2));     // { foodName: 'champon', taste: 'hot' }