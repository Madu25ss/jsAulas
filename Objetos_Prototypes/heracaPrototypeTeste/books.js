function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function() {
    this.isRead = !this.isRead;
}

const book1 = new Book('title1', 'author1', 200, false);
const book2 = new Book('title2', 'author2', 10, true);
const book3 = new Book('title3', 'author3', 500, false);

book3.toggleReadStatus();
console.log(book3);

console.log(book1);
console.log(book2);
console.log(book3);