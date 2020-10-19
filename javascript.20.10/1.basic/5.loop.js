/** while **/
let i = 0;
while(i < 2) {
	console.log(`while: ${i + 10}`);
	i++;
}
/*
while: 10
while: 11
*/

i = -1;
while(++i < 2)
	console.log(`while: ${i + 10}`);
/*
while: 10
while: 11
*/


/** do while **/
do{
	console.log('do');
}while(false); // do


/** for **/
for(let i=0; i<2; i++)
	console.log(`for: ${i}`);
/*
for: 0
for: 1
*/

for(let i=0, limit=2; i<limit; i++)
	console.log(`for: ${i}`);
/*
for: 0
for: 1
*/


/** break **/
for(let i = 0; i < 5; i++){
	if(i >= 2) break;
	console.log('hello');
}
/*
hello
hello
*/