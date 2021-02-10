let set = new Set();

let user1 = {name : 'john'};
let user2 = {name : 'pete'};

set.add(user1).add(user2).add(user1);

console.log(set);

console.log(set.size);
console.log(set.has(user1));
console.log(set.delete(user2));
console.log(set.size);

set.add(user2);

for(let user of set)
	console.log(user);

set.forEach((val, valAgain, set) => console.log(val, valAgain));

//
set = new Set([1, 2, 3]);
console.log(set);

set = new Set('hello');
console.log(set);