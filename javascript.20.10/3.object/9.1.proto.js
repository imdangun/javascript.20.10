let animal = {
	animalName: 'animal'
};

let rabbit = {
	age : 3
};

//객체에는 [[Prototype]] 이라는 숨김 property 가 있다.
//__proto__ 는 [[Prototype]] 의 getter, setter 이다.
console.log(animal.__proto__); // [Object: null prototype] {}
console.log(rabbit.__proto__); // [Object: null prototype] {}

rabbit.__proto__ = animal;
console.log(rabbit.__proto__); // { animalName: 'animal' }
console.log(rabbit.animalName, rabbit.age); // animal 3

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
	_userName: 'user',
	
	get userName() {
		return this._userName + '(get)';
	},
	
	set userName(userName) {
		this._userName = userName + '(set)';
	}
}

let admin = {
	__proto__: user
};

console.log(admin.userName); // user(get)
admin.userName = 'abel';
console.log(admin.userName); // abel(set)(get)


// this 엔 . 앞의 객체가 할당된다.
animal = {
	name: 'animal',
	weight: 50,
	eat() {
		console.log(`${this.name} eat.`);
	}
};

rabbit = {
	name: 'rabbit',
	__proto__: animal
};

let lion = {
	name: 'lion',
	__proto__: animal
};

animal.eat(); // animal eat.
rabbit.eat(); // rabbit eat.
lion.eat();   // lion eat.

console.log();
console.log(Object.keys(rabbit)); // [ 'name' ]

for(let key in rabbit)
	console.log(key);
/*
name
weight
eat
*/

for(let key in rabbit) {
	let isOwn = lion.hasOwnProperty(key);
	
	if(isOwn) console.log(`child property: ${key}`);
	else console.log(`parent property: ${key}`);
};
/*
child property: name
child property: eat
parent property: weight
*/
