/* 과제8:
다음 상속 관계로 객체들을 디자인 하세요.
<life>
name
eat()
excrete()

<animal>
name
move()

<bird>        <mammal>
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

let life = {
	name: 'life',
	eat() {
		console.log(this.name, 'eat.');
	},
	excrete() {
		console.log(this.name, 'excrete.');
	}
};

let animal = {
	name: 'animal',
	move() {
		console.log(this.name, 'move.');
	},
	__proto__: life
};

let bird = {
	name: 'bird',
	move() {
		console.log(this.name, 'fly.');
	},
	__proto__: animal
};

let mammal = {
	name: 'mammal',
	move() {
		console.log(this.name, 'run.');
	},
	__proto__: animal
}

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