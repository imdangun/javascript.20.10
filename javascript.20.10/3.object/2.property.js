/** add property **/
let user = {};

user.height = 200;
user['weight'] = 80;

console.log(user.height, user.weight); // 200 80


/** delete property **/
delete user.weight;
console.log(user.weight); // undefined


/** look object's key **/
user = {
	userName: 'joanna',
	age: 68
};

console.log('userName' in user); // true

//
for(let key in user)
	console.log(`${key}: ${user[key]}`);
/*
userName: joanna
age: 68
*/

console.log(Object.keys(user));    // [ 'userName', 'age' ]
console.log(Object.values(user));  // [ 'joanna', 68 ]
console.log(Object.entries(user)); // [ [ 'userName', 'joanna' ], [ 'age', 68 ] ]


/** function property **/
user = {
	greet: function() {
		console.log('hello');
	}
}

user = {
	greet() {
		console.log('hello');
	}
}

user.greet(); // hello

/** optional chaining **/
//?. 앞의 평가 대상이 null 이나 undefined 이면 undefined 를 return 한다.
user = {};
let address = {};

user.address = address;
address.street = 'sejong';

let msg = user.address.street;
console.log(msg); // sejong


msg = user?.address?.street;
console.log(msg); // sejong

console.log();

msg = user?.hello?.world;
console.log(msg); // undefined

msg = user.hello.world; // TypeError: Cannot read property 'world' of undefined
console.log(msg);

//?. 는 = 왼쪽에 사용할 수 없다.
//user1?.userName = 'violet'; // SyntaxError: Invalid left-hand side in assignment


/** short circuit **/
user = undefined;
//user.sayHi(); // TypeError: Cannot read property 'sayHi' of undefined

user = null;
//user.sayHi(); // TypeError: Cannot read property 'sayHi' of null

user?.sayHi(); // 아무 일도 안 일어난다.


/** ?. 는 syntax construct 이다. 연산자가 아니다. **/ 
let user1 = {
	sayHi() {
		console.log('hi');
	}
}

let user2 = {};

user1.sayHi?.(); // hi
user2.sayHi?.();

//
user1 = {
	userName: 'viloet'
};

user2 = null;

let key = 'userName';

console.log(user1?.[key]); // viloet
console.log(user2?.[key]); // undefined

// delete 엔 ?. 이 효과 없다.
//delete user3.age; // ReferenceError: user3 is not defined
//delete user3?.age; // ReferenceError: user3 is not defined