let animal = {
	isAlive : true
};

function Rabbit(name) {
	this.name = name;
}

console.log(Rabbit.prototype); // {}

Rabbit.prototype = animal;

let rabbit = new Rabbit('white');

console.log(rabbit.name);    // white
console.log(rabbit.isAlive); // true


//
function Duck(name) {
	this.name = name;
}

console.log(Duck.prototype); // {}
console.log(Duck.prototype.constructor); // [Function: Duck]
console.log(Duck.prototype.constructor == Duck); // true

let duck = new Duck('duck');
console.log(duck.__proto__); // {}
console.log(duck.__proto__.constructor); // [Function: Duck]
console.log(duck.__proto__.constructor == Duck); // true

let duck2 = new Duck('duck2');
console.log(duck.__proto__ == duck2.__proto__); // true

let duck3 = new duck.__proto__.constructor('duck3');
duck3 = new duck.constructor('duck3');