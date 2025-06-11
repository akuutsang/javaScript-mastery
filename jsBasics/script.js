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
