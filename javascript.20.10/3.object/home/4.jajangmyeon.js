/* 과제9:
2.function/home/4.jajangmyeon.js 의 짜장면 이야기를
- 객체지향으로 refactoring 한다.
- 각 객체들은 생성자로 디자인한다.
*/

function Food(taste, name) {		
	this.taste = taste;
	this.name = name;
}

function Chef(taste) {
	this.cook = foodName => new Food(taste, foodName);
}

function Waiter() {
	this.order = (foodName, shef) => shef.cook(foodName);
}

chef1 = new Chef('sweet');
chef2 = new Chef('host');

waiter = new Waiter();

console.log(waiter.order('jajangmyeon', chef1)); // Food { taste: 'sweet', name: 'jajangmyeon' }
waiter.order('jajangmyeon', chef2);
waiter.order('champon', chef2);