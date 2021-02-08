/* 과제9:
2.function/home/4.jajangmyeon.js 의 짜장면 이야기를
- 객체지향으로 refactoring 한다.
- 각 객체들은 생성자로 디자인한다.
*/

function Food(taste, name) {
	this.taste = taste;
	this.name = name;
}

Food.prototype.toString = function() {
	return `${this.taste} ${this.name}`;
}; 

function Shef(taste) {
	this.cook = foodName => new Food(taste, foodName);	
}

function Waiter() {
	this.order = (foodName, shef) => shef.cook(foodName);
}

shef1 = new Shef('sweet');
shef2 = new Shef('hot');

waiter = new Waiter();

console.log(waiter.order('jajangmyeon', shef1) + ''); // sweet jajangmyeon
console.log(waiter.order('jajangmyeon', shef2) + ''); // hot jajangmyeon
console.log(waiter.order('champon', shef2) + '');     // hot champon
