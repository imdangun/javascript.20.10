let json = '{"age" : 30}';

try {
	let user = JSON.parse(json);
	
	if(!user.userName) 
		throw new SyntaxError('userName 이 없습니다.');
	
	console.log(user.userName);
} catch(e) {
	if(e instanceof SyntaxError) 
		console.log('JSON error : ' + e.message);
	else throw e;
}