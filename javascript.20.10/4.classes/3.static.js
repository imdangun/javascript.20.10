class Article {
	static publisher = 'ddanzi';
	
	constructor(title, regDate) {
		this.title = title;
		this.regDate = regDate;
	}
	
	static compare(article1, article2) {
		return article1 - article2;
	}
	
	getTitle() {
		return this.title;
	}
	
	valueOf() {
		return this.regDate.valueOf();
	}
}

console.log(Article.publisher); // ddanzi

Article.address = 'seoul';
console.log(Article.address); // seoul

//
Article.getPrice = function() {
	return 2000;
}

console.log(Article.getPrice()); // 2000


//
let article1 = new Article('java', new Date('2025-1-1'));
let article2 = new Article('javascript', new Date('2025-1-2'));

console.log(Article.compare(article1, article2)); // -86400000


//
console.log(article1.getTitle()); // java
// console.log(Article.getTitle());  // TypeError: Article.getTitle is not a function
// console.log(article1.address);    // undefined
// console.log(article1.getPrice()); // TypeError: article1.getPrice is not a function


//
let articles = [article2, article1];
console.log(articles);
/*
[
Article { title: 'java', regDate: 2025-01-31T15:00:00.000Z },
Article { title: 'javascript', regDate: 2025-02-01T15:00:00.000Z }
]
*/

articles.sort(Article.compare);
console.log(articles);
/*
[
Article { title: 'java', regDate: 2025-01-31T15:00:00.000Z },
Article { title: 'javascript', regDate: 2025-02-01T15:00:00.000Z }
]
*/


//
class Advertising extends Article {
	
}

let ad1 = new Advertising('cloth', new Date('2025-5-1'));
let ad2 = new Advertising('shoes', new Date('2025-5-2'));

console.log(Advertising.publisher); // ddanzi

console.log(ad1 - ad2); // -86400000
console.log(Advertising.getPrice()); // 2000