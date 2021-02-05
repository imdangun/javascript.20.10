/** factory fuction **/
let makeUser = function(userName, age) {
	return {
		userName: userName,
		age: age,
	};
}

makeUser = function(userName, age, ...jobs) {
	return {
		userName,
		age
	}
};

//
console.log(makeUser('doris', 57)); // { userName: 'doris', age: 57 }
console.log(makeUser('lincoln', 27)); // { userName: 'lincoln', age: 27 }


/** constructor **/
function User(userName) {
	// this = {};
	this.userName = userName;
	this.greet = function() {
		console.log(`I am ${this.userName}.`);
	};
	// return this;
}

const user1 = new User('bob');
const user2 = new User('sarah');
user1.greet(); // I am bob.
user2.greet(); // I am sarah.

//
let str = String(1);
console.log(str); // 1
console.log(typeof str); // string

str = new String(1);
console.log(str); // [String: '1']
console.log(typeof str); // object

//
let human = new function() {
	this.name = 'meg';
	this.age = 27;
};

console.log(human); // { name: 'meg', age: 27 }


//
function BigUser() {
	this.name = 'amy';
	return {name: 'beth'};
}

function SmallUser() {
	this.name = 'lorie';
}

console.log(new BigUser()); // { name: 'beth' }
console.log(new SmallUser()); // SmallUser { name: 'lorie' }

//
console.log(SmallUser);     // [Function: SmallUser]
console.log(SmallUser());   // undefined
console.log(BigUser());     { userName: 'beth' }


/** Object() **/
const user = new Object();
console.log(user); // {}

user.name = 'chris';
user['age'] = 38;
user.greet = function() {
	console.log(`I am ${this.name}.`); // I am chris.
};

console.log(user); // { userName: 'chris', age: 38, greet: [Function] }
user.greet();


/** view object **/
const person = Object.create(user);
console.log(person);          // {}
console.log(person.userName); // chris
console.log(person == user);  // false

person.height = 200;
console.log(person.height); // 200
console.log(Object.keys(person)); // [ 'height' ]