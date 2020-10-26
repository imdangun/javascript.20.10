/** closure **/
function makeCounter() {
	let count = 0;
	
	function counter() {
		return count++;
	}
	
	return counter; 
}

let myCounter = makeCounter();
console.log(myCounter()); // 0
console.log(myCounter()); // 1

//
makeCounter = function() {
	function counter() {
		return counter.count++;
	}
	
	counter.count = 0;
	
	return counter;
}

myCounter = makeCounter();
console.log(myCounter()); // 0
console.log(myCounter()); // 1

myCounter.count = 10;
console.log(myCounter()); // 10
console.log(myCounter()); // 11