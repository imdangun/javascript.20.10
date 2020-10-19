const age = 16;

if(age < 20) {
	function welcome() {
		console.log('You are in teens.')
	}
}
welcome(); // You are in teens.

if(age < 20) {
	const allow = function() {
		console.log('You are in 10s')
	};
}
// allow(); // ReferenceError: allow is not defined