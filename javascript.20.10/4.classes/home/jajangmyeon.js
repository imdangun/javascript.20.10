/* 
과제:
3.object/home/4.jajangmyeon.js 를 class 로 refactoring 한다.
*/

class Food {
	constructor(taste, name) {		
		this.taste = taste;
		this.name = name;
	}
}

class Chef {	
	constructor(taste) {
		this.taste = taste;
	}
	
	cook(foodName) {
		return new Food(this.taste, foodName);
	}
}

class Waiter {
	order(foodName, shef) {
		return shef.cook(foodName);
	}
}


chef1 = new Chef('sweet');
chef2 = new Chef('hot');

waiter = new Waiter();

console.log(waiter.order('jajangmyeon', chef1)); // Food { taste: 'sweet', name: 'jajangmyeon' }
console.log(waiter.order('jajangmyeon', chef2)); // Food { taste: 'hot', name: 'jajangmyeon' }
waiter.order('champon', chef2);