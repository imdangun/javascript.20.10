let animal = {
	animalName: 'animal',
	age: 3
};

let rabbit = {
	rabbitName: 'rabbit'
};

function Rabbit(rabbitName) {	
	this.rabbitName = rabbitName;
}

console.log(animal.__proto__); // [Object: null prototype] {}
console.log(rabbit.__proto__); // [Object: null prototype] {}

console.log();
console.log(Rabbit.prototype); // {} // {constructor: Rabbit}
console.log(Rabbit.prototype.constructor); // [Function: Rabbit]
console.log(Rabbit.prototype.__proto__); // [Object: null prototype] {}
console.log(Rabbit.__proto__); // {}

//
let rabbit2 = new Rabbit('white');
console.log();
console.log(rabbit2.__proto__);   // {}
console.log(rabbit2.constructor); // [Function: Rabbit]
console.log(rabbit2.rabbitName); // white

Rabbit.prototype = animal;
let rabbit3 = new Rabbit('black');
console.log(rabbit3.__proto__);   // { animalName: 'animal', age: 3 }
console.log(rabbit3.constructor); // [Function: Object]


//
let rabbit22 = new rabbit2.constructor('gold');
console.log(rabbit22); // { rabbitName: 'gold' }
console.log(rabbit22.__proto__); // { animalName: 'animal', age: 3 }

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
console.log(dog2.name, dog2.age); // gray 30*/