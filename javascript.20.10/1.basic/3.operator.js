/** arithmetic operator **/
let val = 1 + 2 * 3 / 2;
console.log(3 % 2);
console.log(4 ** 2);
console.log(4 ** (1/2));

/** incrementing**/
let i = 1;
console.log(++i); // 2
i = 1;
console.log(i++); // 1
console.log(i);   // 2


/** concatenation **/
let foo = 'hello';
let bar = 'world';
console.log(foo + ' ' + bar); // hello world

foo = 1;
bar = '2';
console.log(foo + bar);  // 12

// unary plus operator(+)
console.log(foo + +bar); // 3


/** logical **/
console.log(1 || 0);  // 1
console.log(0 || 1);  // 1
console.log(1 && 0);  // 0
console.log(1 && 2);  // 2
console.log(2 && 1);  // 1

// foo && doSomthing(foo);
// bar = baz || createBar();


/** assignment operator **/
console.log();
let c = 3 - (a = 1 + 2);
console.log(c); // 0

let d = 2;
d *= 2;
console.log(d); // 4


/** comparison operator **/
// 비교 연산자는 type이 다른 피연산자들을 number type 으로 변환한다.
console.log('--------'); 
console.log('2' > 1);      // true
console.log('01' == 1);    // true
console.log(true > 1);     // false
console.log(false == 0);   // true
console.log('0' == 0);     // true
console.log(false == 0);   // true
console.log('' == false);  // true

//equivalent
console.log();
console.log(1 == '1');  // true
console.log(1 != '1');  // false

//identical
console.log();
console.log(1 === '1'); // false
console.log(1 !== '1'); // true

// unicode 로 비교한다.
console.log();
console.log('z' > 'a');
console.log('glow' > 'glee');
console.log('bee' > 'be');
console.log('a' > 'A');

console.log()
// == 외의 비교 연산자는 null을 0 으로 변환한다.
console.log(null > 0);  // false
console.log(null >= 0); // true

// == 에선 null, undefined 를 형변환 안한다.
console.log(null == 0); // false 
console.log(null == undefined);  // true
console.log(null === undefined); // false

// undefined 가 number type 인 NaN 으로 변환된다.
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
// undefined 가 변환되지 않는다.
console.log(undefined == 0); // false
