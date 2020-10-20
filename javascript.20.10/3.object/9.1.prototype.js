let animal = {
	name: 'animal',
	age: 3
};

let rabbit = {
	name: 'rabbit'
};

function Rabbit(name) {
	this.name = name;
}

console.log(animal.__proto__); // {}
console.log(rabbit.__proto__); // {}

console.log(Rabbit.prototype); // Rabbit {}
console.log(Rabbit.prototype.constructor); // [Function: Rabbit]
console.log(Rabbit.prototype.__proto__); // {}

//
let rabbit2 = new Rabbit('white');
console.log(rabbit2.__proto__);   // Rabbit {}
console.log(rabbit2.constructor); // [Function: Rabbit]
console.log(rabbit2.name, rabbit2.age); // white undefined

Rabbit.prototype = animal;
let rabbit3 = new Rabbit('black');
console.log(rabbit3.__proto__);   // { name: 'animal', age: 3 }
console.log(rabbit3.constructor); // [Function: Object]

console.log(rabbit2.__proto__);  // Rabbit {}

//
let rabbit22 = new rabbit2.constructor('gold');
console.log(rabbit22); // { name: 'gold' }
console.log(rabbit22.__proto__); // { name: 'animal', age: 3 }

let rabbit33 = new rabbit3.constructor('silver');
console.log(rabbit33); // [String: 'silver']
let obj = new Object('silver');
console.log(obj); // [String: 'silver']

//
function Dog(name) {
	this.name = name;
}

Dog.prototype.age = 30;

let dog = new Dog('yellow');
console.log(dog); // Dog { name: 'yellow' }
console.log(dog.name, dog.age); // yellow 30

let dog2 = new dog.constructor('gray');
console.log(dog2.constructor); // [Function: Dog]
console.log(dog2.name, dog2.age); // gray 30


/* 과제8:
다음 상속 관계로 객체들을 디자인 하세요.
name
eat()
excrete()

animal
name
move()

bird           mammal
name           name
move()         move()
--

* 실행 코드
bird.eat();
bird.excrete();
bird.move();

mammal.eat();
mammal.excrete();
mammal.move();
/*
bird eat.
bird excrete.
bird fly.
mammal eat.
mammal excrete.
mammal run.
*/