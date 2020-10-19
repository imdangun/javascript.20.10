let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 == id2);      // false
console.log(id1);             // Symbol(id)
console.log(id1.toString());  // Symbol(id)
console.log(id1.description); // id


/** hidden property **/
let user = {
	name: 'neo'
};

let id = Symbol('id');
user[id] = 1;

console.log(user.id);  // undefined
console.log(user[id]); // 1

user = {
	name: 'morpheus',
	age: 52,
	[id]:2
}

console.log(user.id);  // undefined
console.log(user[id]); // 2

for(let key in user)
	console.log(key);
/*
name
age
*/

console.log(Object.keys(user)); // [ 'name', 'age' ]