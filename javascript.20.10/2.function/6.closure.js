/** nested function **/
function init() {
	let name = 'amanda';
	
	function displayName() {
		console.log(name);
	}
	
	displayName();
}

init(); // amanda


/** closure = function + lexcical environment **/
function makeFn() {
	let name = 'parker';
	
	function displayName() {
		console.log(name);
	}	
	
	return displayName;
}

let myFn = makeFn(); // myFn[[Environment]]
myFn(); // parker


//
function makeCounter() {
	let count = 0;
	
	return function() {
		return count++;
	}
}

let counter1 = makeCounter();
let counter2 = makeCounter();

for(let i=0; i<2; i++) console.log(counter1());
/*
0
1
*/

for(let i=0; i<2; i++) console.log(counter2());
/*
0
1
*/