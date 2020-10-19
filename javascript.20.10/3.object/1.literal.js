/** object literal **/
{};

// key: string, symbol, value: any type
let user = {
	name: 'frances',
	age: 70
};

user = {
	name: {
		first: 'bob',
		last: 'smith'
	},
	'nick name': 'tiger face',
	age: 12,
	interests: ['music', 'movie'],
	sing: function() {
		console.log('la la');
	}
};


/** read property **/
// .
console.log(user.name); // { first: 'bob', last: 'smith' }
console.log(user.name.first); // bob
console.log(user.sing()); // la la

// []
// console.log(user.'nick name');   // SyntaxError: Unexpected string
console.log(user['nick name']);     // tiger face
console.log(user['name']['first']); // bob

let key = 'nick name';
console.log(user[key]); // tiger face


/** write property **/
user.name.first = 'john';
user['age'] = 50;
console.log(user.name.first, user.age); // john 50


/** number property name **/
let man = {
	name: 'samuel',
	1: 'one',
	2: 'two'
};

// console.log(man.1); // SyntaxError: missing ) after argument list
console.log(man['1']); // one


/** getter, setter **/
let human = {
	_name: 'no name',
	
	get name() {
		return this._name;
	},

	set name(name) {
		this._name = name;
	}
}

human.name = 'crown';
console.log(human.name); // crown

//
user._name = 'neo';
console.log(user._name); // neo


/* 과제1:
다음 user 객체를 디자인하세요.
- 4글자 이상의 이름만을 쓴다.
- 4글자 이름을 쓰려고 시도하면 에러 메세지를 콘솔에 출력한다.
*/