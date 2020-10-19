function sayHi() {
	console.log('hello');
}
                 //1000ms = 1s
setTimeout(sayHi, 1000); // hello

//
function greet(phrase, who) {
	console.log(phrase, who);
}

setTimeout(greet, 2000, 'hello', 'knox'); // hello knox

//
let timeId = setTimeout(() => console.log('hi'), 3000);
clearTimeout(timeId);