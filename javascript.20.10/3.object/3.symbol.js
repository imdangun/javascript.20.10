let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 == id2);      // false

console.log(id1);             // Symbol(id)
console.log(id1.toString());  // Symbol(id)

console.log(typeof id1);            // symbol
console.log(typeof id1.toString()); // string

console.log(id1.description); // id


/** hidden property **/
let user = {
	userName: 'neo'
};

let id = Symbol('id');
user[id] = 1;

console.log(user.id);  // undefined
console.log(user[id]); // 1

user = {
	userName: 'morpheus',
	age: 52,
	[id]:2
}

console.log(user.id);  // undefined
console.log(user[id]); // 2

for(let key in user)
	console.log(key);
/*
userName
age
*/

console.log(Object.keys(user)); // [ 'userName', 'age' ]