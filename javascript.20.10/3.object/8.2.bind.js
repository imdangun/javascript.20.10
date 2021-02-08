let user = {
	name : 'leo'
};

function greet() {
	console.log(`I am ${this.name}.`);
}

greet(); // I am undefined.

let fn = greet.bind(user);
fn(); // I am leo.

setTimeout(fn, 100); // I am leo.


//
user = {
	name : 'john',
	greet() {
		console.log(`I am ${this.name}.`);
	}
};

let greetFn = user.greet.bind(user);
setTimeout(greetFn, 200); // I am john.