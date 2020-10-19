class Article {	
	static publisher = 'ddanzi';
	
	constructor(title, regDate) {
		this.title = title;
		this.regDate = regDate;
	}
	
	static compare(articleA, articleB) {
		return articleA.regDate - articleB.regDate;
	}
	
	getTitle() {
		return this.title;
	}
}

//
console.log(Article.publisher); // dddanzi

Article.address = 'seoul';
console.log(Article.address);  // seoul

//
let article1 = new Article('css', new Date(2025, 3, 1));
let article2 = new Article('html', new Date(2025, 2, 1));
let article3 = new Article('java', new Date(2025, 1, 1));

console.log(Article.compare(article1, article2));
console.log(Article.compare(article2, article1));

//console.log(Article.getTitle()); // TypeError: Article.getTitle is not a function
console.log(article1.getTitle());  // css

Article.getPrice = function() {
	return 2000;
}
console.log(Article.getPrice());     // 2000

let article = new Article('css', new Date(2025, 3, 1));
// console.log(article.getPrice()); // TypeError: article.getPrice is not a function

//
let articles = [ article1, article2, article3 ];
console.log(articles);
/*
[
Article { title: 'css', regDate: 2025-03-31T15:00:00.000Z },
Article { title: 'html', regDate: 2025-02-28T15:00:00.000Z },
Article { title: 'java', regDate: 2025-01-31T15:00:00.000Z }
]
*/
articles.sort(Article.compare);
console.log(articles);
/*
[
Article { title: 'java', regDate: 2025-01-31T15:00:00.000Z },
Article { title: 'html', regDate: 2025-02-28T15:00:00.000Z },
Article { title: 'css', regDate: 2025-03-31T15:00:00.000Z }
]
*/

//
class Advertising extends Article {
	
}

let ad1 = new Advertising('cloth', new Date(2025, 7, 7));
let ad2 = new Advertising('shoes', new Date(2025, 7, 6));

console.log(Advertising.publisher); // ddanzi;
console.log(Advertising.address);   // seoul;

console.log(Advertising.compare(ad1, ad2)); // 86400000
console.log(Advertising.getPrice()); // 2000

console.log(ad1.getTitle(), ad2.getTitle()); // cloth shoes