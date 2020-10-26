/** function은 object type 이다. **/
function sayHi(myName, ...jobs) {
	console.log(`Hi, I am ${myName}.`);
}

sayHi('john'); // Hi, I am john.

console.log(typeof sayHi); // function
console.log(sayHi.name);   // sayHi
console.log(sayHi.length); // 1, 파라미터 개수, rest 파라미터는 개수에서 제외한다.

//
let user = {
	sayHi() {},
	sayBye() {}
};

console.log(user.sayHi.name);  // sayHi
console.log(user.sayBye.name); // sayBye

/** custom property **/
sayHi = function() {
	let counter = 100;
	console.log('hi');
	sayHi.counter++;
}

sayHi.counter = 0;

sayHi(); // hi
sayHi(); // hi

console.log(`call count: ${sayHi.counter}`); // call count: 2