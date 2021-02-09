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
	
	toString() {
		return this.regDate.valueOf();
	}
}

console.log(Article.publisher); // ddanzi

Article.address = 'seoul';
console.log(Article.address); // seoul


//
let article1 = new Article('java', new Date(2025, 1, 1));
let article2 = new Article('javascript', new Date(2025, 2, 1));

console.log(Article.compare(article1, article2));