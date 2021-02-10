let range = {
	from : 1,
	to : 3
};

range[Symbol.iterator] = function() {
	return {
		current : this.from,
		last : this.to,
		next() {
			if(this.current <= this.last)
				return {done:false, value:this.current++};
			else
				return {done:true};
		}
	}
}

for(let num of range)
	console.log(num);
/*
1
2
3
*/

range = {
	from : 1,
	to : 3,
	
	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},

	next() {
		if(this.current <= this.to)
			return {done:false, value:this.current++};
		else
			return {done:true};
	}
};

for(let num of range)
	console.log(num);

// iterable
let greeting = 'hello';

console.log(greeting[Symbol.iterator]);

let iterator = greeting[Symbol.iterator]();

while(true) {
	let result = iterator.next();
	if(result.done) break;
	console.log(result.value);
}

for(let char of greeting)
	console.log(char);


// array-like
let arr = {
	0 : 'hello',
	1 : 'world',
	3 : 'earth',
	length : 4
};

for(let key in arr)
	console.log(arr[key]);

//for(let item of arr) {}

// array-like, iterable -> array
arr = Array.from(arr);
console.log(arr);

arr = Array.from(range);
console.log(arr);

arr = Array.from('hello');
console.log(arr);