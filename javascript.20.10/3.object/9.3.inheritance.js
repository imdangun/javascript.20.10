let animal = {
	name : 'animal'
};

animal = new Object();
animal.name = 'anmial';

let rabbit = {
	age : 3
};

rabbit = new Object();
rabbit.age = 3;

// 객체엔, [[Prototype]] 이라는 숨김 property 가 있다.
// __proto__ 는 [[Prototype]] 에 접근하는 getter, setter 이다.

console.log(animal.__proto__); // [Object: null prototype] {}
console.log(rabbit.__proto__); // [Object: null prototype] {}

console.log(rabbit.name, rabbit.age); // undefined 3

rabbit.__proto__ = animal;
console.log(rabbit.__proto__); // { name: 'anmial' }
console.log(rabbit.name, rabbit.age); // anmial 3


//
animal = {
	walk() {
		console.log('anmal walk.');
	}
};

rabbit = {
	__proto__ : animal
};

rabbit.walk(); // anmal walk.


//
let user = {
	_name : 'user',
	
	get name() {
		return this._name;
	},

	set name(name) {
		this._name = name;
	}
};

let admin = {
	__proto__ : user
};

console.log(admin.name); // user

admin.name = 'jonadan';
console.log(admin.name); // jonadan


//
animal = {
	name : 'animal',
	weight : 50,
	eat() {
		console.log(`${this.name} eat.`);
	}
};

rabbit = {
	name : 'rabbit',
	__proto__ : animal
};

let lion = {
	name : 'lion',
	__proto__ : animal
};

animal.eat(); // animal eat.
rabbit.eat(); // rabbit eat.
lion.eat();   // lion eat.


//
console.log(Object.keys(rabbit)); // [ 'name' ]

for(let key in rabbit)
	console.log(key);
/*
name
weight
eat
*/

for(let key in rabbit) {
	let isOwn = rabbit.hasOwnProperty(key);
	
	if(isOwn) console.log(`child's key: ${key}`);
	else console.log(`parent's key: ${key}`);
}
/*
child's key: name
parent's key: weight
parent's key: eat
*/
