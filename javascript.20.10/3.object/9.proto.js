let animal = {
	name: 'animal'
};

let rabbit = {
	age : 3
};

// [[Prototype]]
console.log(animal.__proto__); // {}
console.log(rabbit.__proto__); // {}

rabbit.__proto__ = animal;
console.log(rabbit.__proto__); // { name: 'animal' }
console.log(rabbit.name, rabbit.age); // animal 3

//
animal = {
	walk() {
		console.log('animal walk.');
	}
};

rabbit = {
	__proto__: animal
};

rabbit.walk(); // animal walk.

rabbit.walk = function() {
	console.log('rabbit walk.');
};
rabbit.walk(); // rabbit walk.

//
let user = {
	_name: 'user',
	
	get name() {
		return this._name;
	},
	
	set name(name) {
		this._name = name;
	}
}

let admin = {
	__proto__: user
};

console.log(admin.name); // user

//
animal = {
	name: 'animal',
	weight: 50,
	eat() {
		console.log(`${this.name} eat.`);
	}
};

rabbit = {
	name: 'rabbit',
	eat() {
		console.log(`${this.name} eat.`);
	}
};

let lion = {
	name: 'lion',
	eat() {
		console.log(`${this.name} eat.`);
	},
	__proto__: animal
};

animal.eat(); // animal eat.
rabbit.eat(); // rabbit eat.
lion.eat();   // lion eat.

console.log(Object.keys(rabbit)); // [ 'name', 'eat' ]

for(let key in rabbit)
	console.log(key);
/*
name
eat
*/

console.log(Object.keys(lion)); // [ 'name', 'eat' ]

for(let key in lion)
	console.log(key);
/*
name
eat
weight
*/

for(let key in lion) {
	let isOwn = lion.hasOwnProperty(key);
	
	if(isOwn) console.log(`child property: ${key}`);
	else console.log(`parent property: ${key}`);
};
/*
child property: name
child property: eat
parent property: weight
*/
