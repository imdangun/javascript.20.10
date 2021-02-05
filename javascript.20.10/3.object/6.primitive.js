/**  object -> primitive type **/
// hint: string, number, default
let user = {
	name: 'john',
	age : 28,
	
	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`);
		return hint == 'string' ? this.name : this.age;
	}
};

let user2 = {
	name : 'abel',
	age : 38,
	
	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`);
		return hint == 'string' ? this.name : this.age;
	}
};

console.log(user);
/*
{
	name: 'john',
	age: 28,
	[Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]]
}
*/

console.log(+user);
/*
hint: number
28
*/

console.log(user + 100);
/*
hint: default
128
*/

console.log(user > user2);
/*
hint: number
hint: number
false
*/


/*
1. 객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있다면 메서드를 호출합니다. 
   Symbol.toPrimitive는 시스템 심볼로, 심볼형 키로 사용됩니다.
2. 1에 해당하지 않고 hint가 "string"이라면,
   obj.toString()이나 obj.valueOf()를 호출합니다(존재하는 메서드만 실행됨).
3. 1과 2에 해당하지 않고, hint가 "number"나 "default"라면
   obj.valueOf()나 obj.toString()을 호출합니다(존재하는 메서드만 실행됨).
*/

//
console.log();
console.log(JSON.stringify(user)); // {"name":"john","age":28}
console.log(typeof JSON.stringify(user));

console.log(user.toString(), ', ', typeof user.toString()); // [object Object] ,  string
console.log(user.valueOf(), ', ', typeof user.valueOf()); 
/*
{
  name: 'john',
  age: 28,
  [Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]]
} ,  object
*/

user = {
	name : 'neo',
	age : 11,
	
	toString() {
		return this.name;
	},

	valueOf() {
		return this.age;
	}
};

console.log(user.toString()); // neo
console.log(user.valueOf())   // 11

console.log(user);
/*
{
	  name: 'neo',
	  age: 11,
	  toString: [Function: toString],
	  valueOf: [Function: valueOf]
}
*/
console.log(user + 100); // 111



// https://ko.javascript.info/object-toprimitive