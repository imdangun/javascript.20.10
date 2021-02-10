/*
과제4:
다음 refine 함수를 완성한다.
*/

let user = {name : 'scott'};
let fn = () => 1;
let arr = ['ucal', user, 'toby', fn, 'ucal', user, 1, 1, fn];

function refine(arr) {
	return new Set(arr);
}

console.log(refine(arr));
// ['ucal', {name : 'scott'}, 'toby', [Function: fn], 1]
