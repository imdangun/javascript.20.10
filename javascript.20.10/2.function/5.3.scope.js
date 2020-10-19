sayHi(); // Hi
// sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization
// tell();     // ReferenceError: tell is not defined

function sayHi(){
	console.log('Hi');
}

const sayHello = function(){
	console.log('Hello');
}

sayHi();    // Hi
sayHello(); // Hello