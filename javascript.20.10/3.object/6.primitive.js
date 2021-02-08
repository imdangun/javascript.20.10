/**  object -> primitive type **/
let date1 = new Date(2025, 5, 5);
let date2 = new Date(2025, 5, 4);

console.log(date1 - date2); // 86400000


//
// hint: string, number, default
let user = {
	age : 28,
	
	[Symbol.toPrimitive](hint) {		
		return hint == 'string' ? this.name : this.age;
	}
};

let user2 = {
	age : 38,
	
	[Symbol.toPrimitive]() {		
		return this.age;
	}
};

console.log(user > user2); // false
console.log(user + 50);  // 78
console.log(user2 + 50); // 88
console.log();

//
/*
1. 객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있다면 메서드를 호출합니다. 
   Symbol.toPrimitive는 시스템 심볼로, 심볼형 키로 사용됩니다.
2. 1에 해당하지 않고 hint가 "string"이라면,
   obj.toString()이나 obj.valueOf()를 호출합니다(존재하는 메서드만 실행됨).
3. 1에 해당하지 않고 hint가 "number"나 "default"라면
   obj.valueOf()나 obj.toString()을 호출합니다(존재하는 메서드만 실행됨).
*/

user = {
	name : 'neo',
	age : 11,
	
	toString() {
		return this.name;
	}
};
console.log(user + '');  // neo
console.log(user + 100); // neo100

user.valueOf = function() {
	return this.age;
}
console.log(user + 100); // 111


//
userStr = JSON.stringify(user);
console.log(userStr);        // {"name":"neo","age":11}
console.log(typeof userStr); // string


// https://ko.javascript.info/object-toprimitive