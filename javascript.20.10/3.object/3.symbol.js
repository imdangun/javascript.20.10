/** unique identifier **/
let id = Symbol();

let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 == id2);      // false

console.log(id1);             // Symbol(id)
console.log(id2);             // Symbol(id)
console.log(id1.toString());  // Symbol(id)

console.log(typeof id1);            // symbol
console.log(typeof id1.toString()); // string

console.log(id1.description); // id


/** hidden property **/
let user = {
	userName: 'neo'
};

let userId = Symbol('userId');
user[userId] = 1;

console.log(user.userId);  // undefined
console.log(user[userId]); // 1

user = {
	userName: 'morpheus',
	age: 52,
	[userId]:2
}

console.log(user.userId);  // undefined
console.log(user[userId]); // 2


/** hiding symbolic property **/
for(let key in user)
	console.log(key);
/*
userName
age
*/

console.log(Object.keys(user)); // [ 'userName', 'age' ]


/** global symbol registry **/
let regId1 = Symbol.for('regId'); // symbol 이 있으면 있는 것을, 없으면 새로 만들어서 return 한다.
let regId2 = Symbol.for('regId');
console.log(regId1 == regId2); // true

let key = Symbol.keyFor(regId1);
console.log(key, typeof key); // regId string

let globalSymbol = Symbol.for('catName');
let localSymbol = Symbol('catName');

console.log(Symbol.keyFor(globalSymbol)); // catName
console.log(Symbol.keyFor(localSymbol));  // undefined

console.log(localSymbol.description); // catName
console.log(globalSymbol.description); // catName