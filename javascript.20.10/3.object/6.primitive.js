/**  object -> primitive type **/
// hint: string, number, default
let user = {
	userName : 'john',
	age : 28,
	
	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`);
		return hint == 'string' ? this.userName : this.age;
	}
}

//
console.log(+user);      //hint: number      28
console.log(user + 100); // hint: default    128

//
console.log(JSON.stringify(user));        // {"userName":"john","age":28}
console.log(typeof JSON.stringify(user)); // string

//
console.log(user.toString()); 		 // [object Object]
console.log(user.valueOf() == user); // true

user = {
	userName : 'abel',
	age : 11,

	toString() {
		return this.userName;
	},
	
	valueOf() {
		return this.age;
	}
}

console.log(user.toString()); // abel
console.log(user.valueOf());  // 11

console.log(user);
console.log(user + 100); // 111