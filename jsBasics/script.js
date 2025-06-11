function Book(title, author, pages, hasRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.hasRead = hasRead;

  this.bookDetails = function bookReview() {
    const readText = this.hasRead ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages}, ${readText}  `;
  };
}

const theHobbit = new Book("The Hobbits", "J.R.R Tolkien", "295", true);

console.log(theHobbit.bookDetails());

// OBJECT CONTRUCTORS; with class constructor
class Book2 {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead; // true or false
  }

  info() {
    const readStatus = this.isRead ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }
}

const theHobbit2 = new Book2("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit2.info());
// Output: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
