let user1 = {
	userName: 'isabel',
	greet() {
		console.log(`I am ${this.userName}.`);
	}
};

let user2 = {
	userName: 'jade',
	greet() {
		console.log(`I am ${this.userName}.`);
	}
};

user1.greet(); // I am isabel.
user2.greet(); // I am jade.


//
let userName = 'morpheus';

function greet() {
	console.log(`I am ${this.userName}.`);
}

user1 = {userName: 'neo'};
user2 = {userName: 'trinity'};

greet(); // I am undefined.
greet.call(user1); // I am neo.
greet.call(user2); // I am trinity.


//
user1 = {
	userName: 'rebecca',
	greet() {
		console.log(`I am ${this.userName}.`);
	}
};

user2 = {
	userName: 'colin'
};

user1.greet(); // I am rebecca.
// user2.greet(); // TypeError: user2.greet is not a function
user1.greet.call(user2); // I am colin.