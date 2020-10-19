class A {
	
}

class B extends A {
	
}

let a = new A();
let b = new B();

console.log(a instanceof A);      // true
console.log(a instanceof B);      // false
console.log(a instanceof Object); // true

console.log();
console.log(b instanceof A);      // true
console.log(b instanceof B);      // true
console.log(b instanceof Object); // true

console.log();
console.log(typeof a, typeof b, typeof A); // object object function