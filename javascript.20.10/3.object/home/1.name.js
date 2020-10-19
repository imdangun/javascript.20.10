/* 과제1:
다음 user 객체를 디자인하세요.
- 4글자 이상의 이름만을 쓴다.
- 4글자 이름을 쓰려고 시도하면 에러 메세지를 콘솔에 출력한다.
*/

let user = {
	_name: 'no name',
	
	get name() {
		return this._name;
	},

	set name(name) {
		if(name.length >= 4) this._name = name;
		else console.log('name must be at least 4 characters.');
	}
}

user.name = 'neo'; // name must be at least 4 characters.

user.name = 'cyntia';
console.log(user.name); // cyntia