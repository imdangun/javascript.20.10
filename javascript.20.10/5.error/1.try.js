let json = '{"userName":"john", "age":30}';

let user = JSON.parse(json);

console.log(typeof user);   // object
console.log(user.userName); // john
console.log(user.age);      // 30


/** try catch **/
// runtime error = exception
json = '{age : 30}';

// JSON.parse(json); // SyntaxError: Unexpected token b in JSON at position 1

try {
	JSON.parse(json);
} catch {
	console.log('error'); // error 
}

try {
	JSON.parse(json);
} catch(e) {
	console.log(e.name, '\n');     // SyntaxError 
	console.log(e.message, '\n');  // Unexpected token a in JSON at position 1 
	console.log(e.stack);          // SyntaxError: Unexpected ...    at JSON.parse (<a ...
}