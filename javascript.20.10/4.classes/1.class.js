class User {
	age = 10;
	
	constructor(name) {
		this._name = name;
	}
	
	get name() {
		return this._name;
	}
	
	set name(name) {
		if(name.length >= 4) this._name = name;
		else console.log('ERROR] 이름은 4글자 이상이어야 합니다.');
	}
	
	sayMe() {
		console.log(`${this.name}, ${this.age}`);
	}
}

let user = new User('john');

console.log(user.name); // john
user.name = 'neo'; // ERROR] 이름은 4글자 이상이어야 합니다.

user.age = 100;
console.log(user.age); // 100

user.sayMe(); // john, 100


console.log(typeof User); // function
console.log(User); // [class User]


/* class expression */
User = class {
	sayHi() {
		console.log('Hi.');
	}
};

new User().sayHi(); // Hi.


//
User = class MyClass {
	sayHi() {
		console.log(MyClass);
	}
};

new User().sayHi(); // [class MyClass]

console.log(User); // [class MyClass]
// console.log(MyClass); // ReferenceError: MyClass is not defined


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