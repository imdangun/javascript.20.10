/** if **/
const okay = true;
const fail = false;

// if
if(fail) {
	// never run.
}

// if else
if(fail) {
	
} else {
	if(okay) console.log('earth');
	else console.log('moon');
} // earth


/** ternary **/
const foo = okay ? 1 : 0;
console.log(foo); // 1


/** switch **/
const bar = 'bar';
switch(bar) {
case 'bar':
	console.log('bar'); break;
case 'baz':
	console.log('baz'); break;
default:
	console.log('all right');
} // bar