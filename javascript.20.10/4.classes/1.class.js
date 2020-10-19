/** basic syntax **/
class User {
	userName;
	
	constructor(userName) {
		this.userName = userName;
	}
	
	getUserName() {
		return this.userName;
	}
	
	setUserName(userName) {
		if(userName.length < 4) {
			console.log('userName is too short.');
		} else {
			this.userName = userName;			
		}
	}
	
	sayHi() {
		console.log('Hi, I am ' + this.userName);
	}
}

let user = new User('john');
console.log(user.getUserName()); // john

user.setUserName('neo'); // userName is too short.

user.sayHi(); // Hi, I am john

console.log(typeof User); // function

console.log(User); // [Function: User]


/** class expression **/
User = class {
	sayHi() {
		console.log('hi');
	}
}

new User().sayHi(); // hi

//
User = class MyClass {
	sayHi() {
		console.log(MyClass);
	}
};

new User().sayHi(); // [Function: MyClass]

//console.log(MyClass); // ReferenceError: MyClass is not defined

//
function makeClass(phrase) {
	return class {
		sayHi() {
			console.log(phrase);
		}
	};
}

User = makeClass('hello');
new User().sayHi(); // hello