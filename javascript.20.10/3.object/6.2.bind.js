let name = 'lincoln';

let man = {
	name: 'leo'
};

function greet() {
	console.log(`I am ${this.name}.`);
}

greet(); // I am undefined.

let fn = greet.bind(man);
fn(); // I am leo.

setTimeout(fn, 500); // I am leo.


//
let user = {
	name: 'john',
	greet() {
		console.log(`I am ${this.name}.`);
	}
}

let greetFn = user.greet.bind(user);

setTimeout(greetFn, 1000); // I am john.

user.greet = function() {
	console.log('hello');
}