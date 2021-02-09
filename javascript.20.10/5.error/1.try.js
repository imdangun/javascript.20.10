let json = '{"name" : "john", "age" : 30}';

let user = JSON.parse(json);

console.log(typeof user); // object

console.log(user.name);   // john
console.log(user.age);    // 30


/* try */
json = '{age : 30}';

// JSON.parse(json); // SyntaxError: Unexpected token a in JSON at position 1

try {
	JSON.parse(json);
} catch {
	console.log('ERROR');
}

try {
	JSON.parse(json);
} catch(e) {
	console.log(e.name, '\n');     // SyntaxError 
	console.log(e.message, '\n');  // Unexpected token a in JSON at position 1 
	console.log(e.stack);
	/*
	 	SyntaxError: Unexpected token a in JSON at position 1
    	at JSON.parse (<anonymous>)
    	at Object.<anonymous> (C:\DEV\wor ...
	 */
}