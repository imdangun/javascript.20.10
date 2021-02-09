class Animal {
	constructor(name) {
		this.name = name;		
	}
	
	run(speed) {
		this.speed = speed;
		console.log(`${this.name}이 ${this.speed}m/s로 달린다.`);
	}
	
	stop() {
		this.speed = 0;
		console.log(`${this.name}이 멈췄다.`);
	}
}

let animal = new Animal('animal');
animal.run(10); // animal이 10m/s로 달린다.
animal.stop();  // animal이 멈췄다.


/* extends */
class Duck extends Animal {
	run(speed) {
		this.speed = speed / 10;
		console.log(`${this.name}이 ${this.speed}m/s 로 뒤뚱뒤뚱 걷는다.`);
	}
	
	hide() {
		console.log(`${this.name}이 숨다.`);
	}
}

console.log();
let duck = new Duck('duck');

duck.run(10); // duck이 1m/s 로 뒤뚱뒤뚱 걷는다.
duck.stop();  // duck이 멈췄다.
duck.hide();  // duck이 숨다.


/* super. */
class Rabbit extends Animal {
	stop() {
		super.stop();
		this.hide();
	}
	
	hide() {
		console.log(`${this.name}이 숨다.`);
	}
}

console.log();
new Rabbit('rabbit').stop();
/*
rabbit이 멈췄다.
rabbit이 숨다.
*/


/* super() */
Rabbit = class extends Animal {
	constructor(name, earLength) {
		super(name); // super 생성자 호출문은 자식 생정자 첫줄에 와야 한다.
		this.earLength = earLength;
	}
}

let rabbit = new Rabbit('rabbit', 10);

console.log(rabbit.name); // rabbit
console.log(rabbit.earLength); // 10