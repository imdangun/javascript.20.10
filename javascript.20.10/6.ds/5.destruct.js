let arr = ['ilya', 'kantor'];
let [name, surname] = arr;
console.log(name, surname); // ilya kantor

let [one, two] = [1, 2, 3];
console.log(one, two); // 1 2

let [three, four] = [3];
console.log(three, four); // 3 undefined

[one, , three] = [1, 2, 3, 4];
console.log(one, three); // 1 3

//
let [a, b, c] = 'i am';
console.log(a, b, c); // i   a

let iam = 'i am'.split(' ');
console.log(iam); // [ 'i', 'am' ]

[a, b] = iam;
console.log(a, b); // i am

[a, b, c] = new Set([1, 2, 3, 4]);
console.log(a, b, c); // 1 2 3


//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ');
console.log(user); // { name: 'john', surname: 'smith' }


//
user = {
	name : 'oscar',
	age : 21
};

let entries = Object.entries(user);
console.log(entries); // [ [ 'name', 'oscar' ], [ 'age', 21 ] ]

for(let [key, val] of entries)
	console.log(key, val);
/*
name oscar
age 21
*/

let map = new Map([
	['name', 'edith'],
	['age', 30]
]);

for(let [key, val] of map)
	console.log(key, val);
/*
name edith
age 30
*/

//
let guest = 'jane';
let admin = 'pete';

[guest, admin] = [admin, guest];
console.log(guest, admin); // pete jane


//
[one, two, ...rest] = [1, 2, 3, 4];
console.log(one, two, rest); // 1 2 [ 3, 4 ]


//
[name, surname='anonymous'] = ['john'];
console.log(name, surname); // john anonymous


// pattern
let options = {
	title : 'menu',
	width : 100,
	height : 200
};

let {title, height, width} = options;
console.log(title, width, height); // menu 100 200

// {title, height, width} = options; // SyntaxError: Unexpected token '='
({title, height, width} = options);
console.log(title, width, height); // menu 100 200

let {width: w, height: h} = options;
console.log(w, h); // 100 200

let {title: t, ...other} = options;
console.log(t, other); // menu { width: 100, height: 200 }

let {title: subject, wide=1000} = options;
console.log(subject, wide); // menu 1000

[options.title, options.width, options.height] = ['article', 10, 20];
console.log(options); // { title: 'article', width: 10, height: 20 }


//
let bread = {
	size : {
		width : 100,
		height : 200
	},
	items : ['cake', 'donut'],
	extra : true
};

let {size, items} = bread;
console.log(size); // { width: 100, height: 200 }
console.log(items); // [ 'cake', 'donut' ]

//
let {
	size: {
		width : breadth,
		height: level,
	},
	items: [item1, item2]
} = bread;

console.log(breadth, level, item1, item2); // 100 200 cake donut


// argument
let menu = {
	title : 'menu',
	items : ['list', 'add'],
	expired : 10
};

function showMenu({title:name, items:[entry1, entry2]}) {
	console.log(name, entry1, entry2);
}

showMenu(menu); // menu list add