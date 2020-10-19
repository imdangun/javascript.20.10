/** object literal **/
{};

//key: string, symbol, value: any type
let user = {
	userName: 'frances',
	age : 70
}

user = {
	userName : {
		first: 'bob',
		last: 'smith'
	},	
	'nick name' : 'tiger face',
	age : 13,
	interests : ['music', 'movie'],
	sing: function() {
		console.log('la la');
	}
};


/** read property **/
console.log(user.userName);
console.log(user.userName.first); // chaining
user.sing();

//console.log(user.'nick name'); // SyntaxError: Unexpected string
console.log(user['nick name']);  // tiger face
console.log(user['userName']['first']); // bob


/** write property **/
user.userName.first = 'john';
user['age'] = 50;
console.log(user.userName.first, user.age); // john 50


/** [] **/
let key = 'nick name';
console.log(user[key]); // tiger face
key = 'age';
console.log(user[key]); // 13

// number property name
let man = {
	manName : 'samuel',
	1 : 'one',
	2 : 'two'
}

console.log(man['1']); // one


/* getter, setter */
let human = {
	_humanName : 'no name',
	
	get humanName() {
		return this._humanName + '(get)';
	},

	set humanName(humanName) {
		this._humanName = humanName + '(set)';
	}
}

console.log(human.humanName); // no name(get)
human.humanName = 'crown';
console.log(human.humanName); // crown(set)(get)