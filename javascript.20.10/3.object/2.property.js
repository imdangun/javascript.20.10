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
	name: 'joanna',
	age: 68
};

console.log('name' in user); // true

//
for(let key in user)
	console.log(`${key}: ${user[key]}`);
/*
name: joanna
age: 68
*/

console.log(Object.keys(user));    // [ 'name', 'age' ]
console.log(Object.values(user));  // [ 'joanna', 68 ]
console.log(Object.entries(user)); // [ [ 'name', 'joanna' ], [ 'age', 68 ] ]


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