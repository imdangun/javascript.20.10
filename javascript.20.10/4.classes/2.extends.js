class Animal {	
	constructor(animalName) {
		this.animalName = animalName;
		this.speed = 0;
	}
	
	run(speed) {
		this.speed = speed;
		console.log(`${this.animalName} runs at ${this.speed} m/s.`);
	}
	
	stop() {
		this.speed = 0;
		console.log(`${this.animalName} stopped.`);
	}
}

let animal = new Animal('animal');
animal.run(10); // animal runs at 10 m/s.
animal.stop();   // animal stopped.


/** method overriding **/
class Duck extends Animal {
	run(speed) {
		this.speed = speed / 10;
		console.log(`${this.animalName} walks at ${this.speed} m/s.`);
	}
	
	hide() {
		console.log(`${this.animalName} hides.`);
	}
}

console.log();
let duck = new Duck('duck');
duck.run(10); // duck walks at 1 m/s.
duck.stop();  // duck stopped.
duck.hide();  // duck hides.


/** super **/
class Rabbit extends Animal {
	stop() {
		super.stop();
		this.hide();
	}
	
	hide() {
		console.log(`${this.animalName} hides.`);
	}
}

console.log();
new Rabbit('rabbit').stop(); // rabbit stopped. rabbit hides.


/** constructor overriding **/
Rabbit = class extends Animal {
	earLength;
	
	constructor(animalName, earLength) {
		super(animalName);
		this.earLength = earLength;
	}
}

let rabbit = new Rabbit('rabbit', 10);
console.log(rabbit.animalName); // rabbit
console.log(rabbit.earLength);  // 10