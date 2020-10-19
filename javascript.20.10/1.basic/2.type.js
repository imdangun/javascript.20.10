/** string **/
let foo = "I am a string";
foo = 'So am I';
foo = `back tick`;

foo = 'He said "Javascript is awesome"';
foo = "He said \"Javascript is awesome\"";


/** number: int, 64bit floating point number **/
foo = 100;
foo = 100.10;
foo = 0.10;

console.log(1 / 0);   // Infinity
console.log('a' / 1); // NaN

foo = 1;
console.log(isFinite(foo)); // true
foo = 'hello';
console.log(isFinite(foo)); // false

foo = '1';
console.log(parseInt(foo)); // 1
foo = 'a';
console.log(parseInt(foo)); // NaN
foo = '100px';
console.log(parseInt(foo)); // 100
foo = '+1';
console.log(parseInt(foo)); // 1
foo = '-1';
console.log(parseInt(foo)); // -1
foo = '801212-1111842';
console.log(parseInt(foo)); // 801212

foo = '12.6';
console.log(parseInt(foo));   // 12
console.log(parseFloat(foo)); // 12.6

// Infinity, -Infinify, NaN 은 special numeric value 이다.
let a = Infinity * 2;
let b = NaN * 2;
console.log(a, b); // Infinity NaN

a = Infinity * NaN;
console.log(a); // NaN


/** bigint: (2**53-1) 초과 bit, 16 digit number over **/
foo = 1n;


/** boolean **/
const okay = true;
const fail = false;


/** null: nothing, empty, unknown **/
let val = null;


/** undefined **/
let val2;
console.log(val2); // undefined
val2 = undefined;


/** Symbol **/
let id = Symbol('id');
console.log(typeof id); // symbol


/** casting **/
// String()
val = 1;
val = String(val);
console.log(typeof val); // string

val = '6' / '2';
console.log(val); // 3

val = false / true;
console.log(val); // 0

// Number()
val = '1';
val = Number(val);
console.log(typeof val); // number

console.log(Number('1'), Number(true),          // 1 1
		Number(' '), Number(''), Number(null),  // 0 0 0
		Number('a'), Number(undefined));        // NaN NaN

// Boolean()
console.log(Boolean(-1),                          // true 
		Boolean('a'), Boolean('0'), Boolean(' '), // true true true
		Boolean(0), Boolean(''),                  // false false
		Boolean(null), Boolean(undefined), Boolean(NaN)); // false false false