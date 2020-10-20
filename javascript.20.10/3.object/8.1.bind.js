let user = {
	name: 'madonna',
	greet() {
		console.log(`I am ${this.name}.`);
	}
};

user.greet(); // I am madonna.

setTimeout(user.greet, 100); // I am undefined.

let fn = user.greet;
setTimeout(fn, 200); // I am undefined.


//
setTimeout(function() {
	user.greet();
}, 300); // I am madonna.

setTimeout(() => user.greet(), 400); // I am madonna.