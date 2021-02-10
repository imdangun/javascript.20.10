/*
과제4:

*/

let user = {name : 'scott'};
let fn = () => 1;
let arr = ['ucal', user, 'toby', fn, 'ucal', user, 1, 1, fn];

function refine(arr) {
	
}

console.log(refine(arr));
// ['ucal', {name : 'scott', 'toby', [Function: fn], 1]
