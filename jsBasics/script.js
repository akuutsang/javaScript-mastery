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

const books = [
  new Book("1984", "George Orwell", 328, true),
  new Book("Dune", "Frank Herbert", 412, false),
  new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
];

books.forEach((book) => {
  console.log(book.info());
});

//OBJECT CONTRUCTORS; old school method

function OldBook(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

OldBook.prototype.info = function () {
  const readStatus = this.isRead ? "already read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
};

const classic = new OldBook("Dracula", "Bram Stoker", 418, false);
console.log(classic.info());
