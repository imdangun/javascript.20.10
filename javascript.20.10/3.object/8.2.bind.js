let user = {
	userName: 'leo'
};

function greet() {
	console.log(`I am ${this.userName}.`);
}

greet(); // I am undefined.

let fn = greet.bind(user);
fn(); // I am leo.

setTimeout(fn, 500); // I am leo.


//
user = {
	userName: 'john',
	greet() {
		console.log(`I am ${this.userName}.`);
	}
}

let greetFn = user.greet.bind(user);

setTimeout(greetFn, 1000); // I am john.