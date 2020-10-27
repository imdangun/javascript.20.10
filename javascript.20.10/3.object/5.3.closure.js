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