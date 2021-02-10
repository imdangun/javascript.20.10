let map = new Map();

map.set('1', 'hello');
map.set(1, {name : 'david'});
map.set(true, function fn() {});

console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(true));

console.log(map.has(1));
console.log(map.size);

console.log(map.delete(1));
console.log(map.size);

map.clear();
console.log(map.size);


//
map = new Map();
let person = {name : 'damon'};
map.set(person, 1);
console.log(map.get(person));


// chaining
map = new Map();
map.set(1, 'amella').set(2, 'avery').set(3, 'adela');
console.log(map);

let greens = new Map([
	['cucumber', 500],
	['tomato', 350],
	['onion', 50]
]);

for(let entry of greens)
	console.log(entry);

let keys = greens.keys();
console.log(keys);

for(let key of keys)
	console.log(key);

let values = greens.values();
console.log(values);

for(let value of values)
	console.log(value);

greens.forEach((val, key, map) => console.log(key, val));


// object -> entries -> map
let user = {
	name : 'adien',
	age : 56
};

let entries = Object.entries(user);
console.log(entries);

map = new Map(entries);
console.log(map);

// map -> object
map = new Map();
map.set('apple', 1);
map.set('orange', 2);
map.set('pear', 3);

fruits = Object.fromEntries(map);
console.log(fruits);