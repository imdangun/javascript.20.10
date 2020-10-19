/** factory fuction **/
let makeUser = function(name, age) {
	return {
		name: name,
		age: age,
	};
}

makeUser = function(name, age) {
	return {
		name,
		age
	}
};

console.log(makeUser('doris', 57)); // { name: 'doris', age: 57 }
console.log(makeUser('lincoln', 27)); // { name: 'lincoln', age: 27 }


/** constructor **/
function User(name) {
	// this = {};
	this.name = name;
	this.greet = function() {
		console.log(`I am ${this.name}.`);
	};
	// return this;
}

const user1 = new User('bob');
const user2 = new User('sarah');
user1.greet(); // I am bob.
user2.greet(); // I am sarah.

//
let str = String(1);
console.log(typeof str); // string

str = new String(1);
console.log(typeof str); // object

//
let human = new function() {
	this.name = 'meg';
	this.age = 27;
};

//
function BigUser() {
	this.name = 'amy';
	return {name: 'beth'};
}

function SmallUser() {
	this.name = 'lorie';
	return;
}

console.log(new BigUser());   // { name: 'beth' }
console.log(new SmallUser()); // SmallUser { name: 'lorie' }

//
console.log(new SmallUser); // SmallUser { name: 'lorie' }
console.log(SmallUser);     // [Function: SmallUser]
console.log(SmallUser());   // undefined


/** Object() **/
const user = new Object();

user.name = 'chris';
user['age'] = 38;
user.greet = function() {
	console.log(`I am ${this.name}.`); // I am chris.
};

console.log(user); // { name: 'chris', age: 38, greet: [Function] }
user.greet();


/** view object **/
const person = Object.create(user);
console.log(person);          // {}
console.log(person.name);     // chris
console.log(person === user); // false

person.height = 200;
console.log(Object.keys(person)); // [ 'height' ]


/* 과제4:
/ch02/home/3.jajangmyeon.js 의 짜장면 이야기를
 객체지향으로 refactoring 하세요.
*/